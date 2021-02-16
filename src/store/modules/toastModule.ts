import { ToastState } from '@/interfaces/toast.interface'

  export default {
    namespaced: true as true,

    state: {
      showToast : false,
      isSuccess : false,      
      toastMessage: ""

    } as ToastState,

    mutations: {
      SET_TOAST_STATUS(state :ToastState, toast: ToastState) {
        state.showToast = toast.showToast,
        state.isSuccess = toast.isSuccess,        
        state.toastMessage = toast.toastMessage
      },
    }
  }