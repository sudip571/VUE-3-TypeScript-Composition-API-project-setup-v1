import { UserLogIn } from "@/interfaces/auth.interface";
import { defineComponent, reactive, ref } from "vue";
import { authService } from "@/services/authService";
import { Status } from "@/interfaces/response.interface";
import { AxiosError } from "axios";
import { useRouter, useRoute } from "vue-router";

export default function testcom(){
    const route = useRoute();
    const router = useRouter();    
    const routePath = route.query.returnUrl;
    const loginModel: UserLogIn = reactive<UserLogIn>({
      email: "",
      password: ""
    });
    const errorMessage = ref("");
    const isLoading = ref(false);
    const handleSubmit = async () => {
      try {
        isLoading.value = true;
        const result = await authService.loginAsync(loginModel);
        console.log(result);
        isLoading.value = false;
        if (typeof routePath == "string") {
          router.push(routePath);
        } else {
          router.push("/");
        }
      } catch (err) {
        if (err && err.response) {
          isLoading.value = false;
          errorMessage.value = err.response.data.message;
        }
        //  if (err && err.response) {
        //     const axiosError = err as AxiosError<Status>;
        //     const errorStatus = (axiosError.response?.data ) as Status;
        //     isLoading.value = false;
        //     errorMessage.value = errorStatus.message ;
        //   }
      }
    };
    return { loginModel, errorMessage, handleSubmit, isLoading };
}

