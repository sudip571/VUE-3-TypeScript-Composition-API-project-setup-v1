import { ResponseStatus } from '@/enums/httpStatus';
import { ErrorModel, Status } from "@/interfaces/response.interface";
import { ToastState } from '@/interfaces/toast.interface';
import router from '@/router';
import store from '@/store';
import { AxiosError } from "axios";

export default function errorHandling(err: any, errorModel: ErrorModel): void {
      if (err && err.response) {
            const axiosError = err as AxiosError<Status>;
            const errorData = (axiosError.response?.data) as Status;
            const statusCode = axiosError.response!.status;

            // unhandled exception  from back end side
            if (statusCode == ResponseStatus.EXCEPTION) {
                  const toastState = {
                        showToast: true,
                        isSuccess: false,
                        toastMessage: errorData.message
                  } as ToastState;
                  store.commit.toastModule.SET_TOAST_STATUS(toastState);
            }
            //handle  token expired 
            else if (statusCode == ResponseStatus.TOKEN_EXPIRED) {
                  const currentPath = router.currentRoute.value.fullPath;
                  router.currentRoute.value.query = { returnUrl: currentPath };
                  localStorage.removeItem('user');
                  router.push({ name: 'Login', params: { message: errorData.message } });
            }
            //handle  unauthorized response
            else if (statusCode == ResponseStatus.UNAUTHORIZED) {
                  const toastState = {
                        showToast: true,
                        isSuccess: false,
                        toastMessage: errorData.message
                  } as ToastState;
                  store.commit.toastModule.SET_TOAST_STATUS(toastState);
                  router.push("/");
            }
            //handle  other kind of  response
            else {
                  errorModel.errorMessage = errorData.message;
            };
      }
}