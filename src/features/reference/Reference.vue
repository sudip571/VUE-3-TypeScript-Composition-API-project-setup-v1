<template>
   <!-- component -->
<div class="w-2/3 mx-auto">
  <div class="bg-white shadow-md rounded my-6">
    <table class="text-left w-full border-collapse"> <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
      <thead>
        <tr>
          <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">City</th>
          <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">New York</td>
          <td class="py-4 px-6 border-b border-grey-light">
            <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</a>
            <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</a>
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">Paris</td>
          <td class="py-4 px-6 border-b border-grey-light">
            <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</a>
            <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</a>
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">London</td>
          <td class="py-4 px-6 border-b border-grey-light">
            <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</a>
            <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</a>
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">Oslo</td>
          <td class="py-4 px-6 border-b border-grey-light">
            <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</a>
            <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</a>
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">Mexico City</td>
          <td class="py-4 px-6 border-b border-grey-light">
            <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</a>
            <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ReferenceModel } from './reference.interface';
import { referenceService } from './referenceService';

export default defineComponent({
    name:"Reference",
    setup () {

        let referenceModelList = reactive<Array<ReferenceModel>>([]);
        const errorMessage = ref("");
        const isLoading = ref(false);
        const getAll = async () => {
      try {
        isLoading.value = true;
        referenceModelList = await referenceService.getAllAsync();
        console.log(referenceModelList);
        isLoading.value = false;        
      } catch (err) {
        if (err && err.response) {
          console.log(err.response);
          console.log(err.response.data);
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
    getAll();

        return {}
    }
})
</script>

<style scoped>

</style>