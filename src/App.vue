<template>
  <div id="app">
    <!-- <div id="nav" v-if="hideNavigation">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/login">Login</router-link>
    </div> -->
    <NavigationMenu v-if="hideNavigation"></NavigationMenu>
     <ToastNotification></ToastNotification>
    <router-view />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";
import NavigationMenu from "@/components/NavigationMenu.vue";
import ToastNotification from "@/components/ToastNotification.vue"
import { ToastState } from './interfaces/toast.interface';
import store from './store';
export default defineComponent({
  components:{
    NavigationMenu,
    ToastNotification
  },
  setup() {
    const route = useRoute();
    const navigationLessRouteName: string[] = ["Login", "Register"];    
    const hideNavigation = computed(() => {
      const routeName: string = route.name as string;
      return !navigationLessRouteName.includes(routeName);
    });

    //#region reset ToastModule vuex state to hide toast notification during route change
     watch(() => route.name, (newValue, oldValue) => {      
       setTimeout(() => {      
      const toast = {
        showToast: false,
        isSuccess: false,
        toastMessage: ""
      } as ToastState;
      store.commit.toastModule.SET_TOAST_STATUS(toast);
    }, 3000);
    })
    //#endregion
   
   return { hideNavigation };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
