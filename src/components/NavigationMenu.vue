<template>
    <ul class="flex">        
  <li class="mr-6">
    <router-link to="/" class="text-blue-500 hover:text-blue-800">Home</router-link> 
  </li>
  <li class="mr-6">
    <router-link to="/about" class="text-blue-500 hover:text-blue-800">About</router-link> 
  </li>
   <li class="mr-6">
    <router-link to="/reference" class="text-blue-500 hover:text-blue-800">Reference</router-link> 
  </li>
  <!-- <li class="mr-6">
    <router-link  to="" class="text-blue-500 hover:text-blue-800" @click="logOut">Log out</router-link> 
  </li> -->
  <button class="text-blue-500 hover:text-blue-800" @click="logOut"> logout</button>
  
</ul>
 <!-- <router-link
            tag="button"
            class="button add-button"
            :to="{ name: 'test', params: { id: 0 } }"
          > -->
</template>

<script lang="ts">
import { authService } from '@/services/authService';
import { defineComponent } from 'vue';
import { useRoute, useRouter} from "vue-router";
export default defineComponent({
    name:"NavigationMenu",
    setup () {
        const route = useRoute();
        const router = useRouter();
        const logOut = async () =>{
            try {            
                await authService.logoutAsync();
                router.push("/login");
            } catch (error) {
                console.log(error);
            }            
        }

        return {logOut}
    }
})
</script>

<style scoped>

</style>