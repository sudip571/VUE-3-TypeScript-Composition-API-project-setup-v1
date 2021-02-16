//#region import section
import { createDirectStore } from "direct-vuex";
import toastModule from "@/store/modules/toastModule";

//#endregion


const { store, rootActionContext, moduleActionContext, rootGetterContext, moduleGetterContext } = createDirectStore({
  //#region root state 
  state: {},
  mutations: {},
  actions: {}, 
  //#endregion 

  modules: {
    toastModule
  }
});

//#region  please do not make any changes here
export default store;
export { rootActionContext, moduleActionContext, rootGetterContext, moduleGetterContext };
export type AppStore = typeof store
declare module "vuex" {
  interface Store<S> {
      direct: AppStore
  }
}
//#endregion



