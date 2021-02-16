<template>
  <LoadingElement :isActive="isLoading"></LoadingElement>

  <div class="w-full h-screen flex">
    <!-- :src="require('@/assets/images/login.png')" -->
    <img
      src="@/assets/images/login.png"
      alt="background"
      class="object-cover object-center h-screen w-7/12"
    />
    <div
      class="bg-white flex flex-col justify-center items-center w-5/12 shadow-lg"
    >
      <h1 class="text-3xl font-bold text-mulled-wine-500 mb-2">
        FLIGHTDECK 2.0
      </h1>
      <p v-if="errorModel.errorMessage" class="text-red-600 text-opacity-100">
        {{ errorModel.errorMessage }}
      </p>
      <!-- <p v-if="message" class="text-red-600 text-opacity-100">{{ message }}</p> -->

      <div class="w-auto px-2">
        <div class="flex  border-b border-athens-gray-500 py-2 my-3">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            v-model="loginForm.email"
            placeholder="Email"
            aria-label
          />
          <p
            v-if="loginForm.errors().has('email')"
            class="text-red-600 text-opacity-100"
          >
            {{ loginForm.errors().get("email") }}
          </p>
        </div>
        <div class="flex  border-b border-athens-gray-500 py-2 my-3">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="password"
            v-model="loginForm.password"
            autocomplete="off"
            placeholder="Password"
            aria-label
          />
          <p
            v-if="loginForm.errors().has('password')"
            class="text-red-600 text-opacity-100"
          >
            {{ loginForm.errors().get("password") }}
          </p>
        </div>
        <button
          class="flex bg-gray-700 hover:bg-gray-500 text-white px-3 py-1 rounded text-lg focus:outline-none shadow"
          :class="{ 'cursor-not-allowed': loginForm.empty() }"
          :disabled="loginForm.empty()"
          @click="handleSubmit"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//#region import section
import { UserLogIn } from "@/interfaces/auth.interface";
import { computed, defineComponent, reactive, ref } from "vue";
import { authService } from "@/services/authService";
import { ErrorModel, Status } from "@/interfaces/response.interface";
import { AxiosError } from "axios";
import { useRouter, useRoute } from "vue-router";
import form from "vuejs-form";
import testcom from "@/composable/usetest";
import store from "@/store";
import { ToastState } from "@/interfaces/toast.interface";
import errorHandling from "@/composable/useErrorHandler";
//#endregion

export default defineComponent({
  name: "Login",
  components: {},
  props: {
    message: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    //#region variable/data section
    
    //const{loginModel, errorMessage, handleSubmit, isLoading} = testcom();
    // return { loginModel, errorMessage, handleSubmit, isLoading };
    const route = useRoute();
    const router = useRouter();
    const routePath = route.query.returnUrl;
    const isLoading = ref(false);
    const errorModel = reactive<ErrorModel>({
      errorMessage: props.message
    });
    const loginModel: UserLogIn = {
      email: "",
      password: ""
    };

    //#endregion
   
   //#region form properties and its validation declaration
    const loginForm = reactive(
      form(loginModel)
        .rules({
          email: "email|required",
          password: "required"
        })
        .messages({
          "email.email": "Invalid email"
        })
    );
    //#endregion

    const handleSubmit = async () => {
      if (
        loginForm
          .validate()
          .errors()
          .any()
      )
        return;
      try {
        isLoading.value = true;
        const result = await authService.loginAsync(loginModel);
        console.log(result);
        isLoading.value = false;
        const toastState = {
          showToast: true,
          isSuccess: true,
          toastMessage: "Welcome to FlightDeck"
        } as ToastState;
        store.commit.toastModule.SET_TOAST_STATUS(toastState);
        if (typeof routePath == "string") {
          router.push(routePath);
        } else {
          router.push("/");
        }
      } catch (err) {
        isLoading.value = false;
        errorHandling(err, errorModel);
      }
    };

    return { loginForm, errorModel, handleSubmit, isLoading };
  }
});
</script>

<style scoped>
</style>