
<template>
 <Suspense>
   <template #default>
     <ClientSetting></ClientSetting>
   </template>
   <template #fallback>
     <span>Loading... Please wait.</span>
   </template>
 </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ClientSetting from './CLientSetting.vue';
export default defineComponent({
    name:"ProfileSetting",
    components:{
ClientSetting
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>