<template>
  <div>
    <form class="w-full max-w-lg mt-5 ml-6" @submit.prevent="save">
      <h4 class="mb-5 text-left">Client Setting</h4>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Profile Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="clientForm.profileName"
            id="grid-first-name"
            type="text"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Profile Description
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            v-model="clientForm.ProfileDescription"
            id="grid-last-name"
            type="text"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Client
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="clientForm.client"
            id="grid-first-name"
            type="text"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Contact Person
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            v-model="clientForm.contactPerson"
            id="grid-last-name"
            type="text"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Website
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="clientForm.website"
            id="grid-first-name"
            type="text"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            v-model="clientForm.email"
            id="grid-last-name"
            type="text"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Frequency
          </label>
          <div class="relative">           
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              v-model="clientForm.frequency"
              id="grid-state"
            >
              <option
                v-for="option in frequencyOption"
                :key="option.value"
                :value="option.value"
              >
                {{ option.text }}
              </option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Baseline Date
          </label>
          <date-picker
            v-model="clientForm.baselineDate"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          ></date-picker>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Primary Color
          </label>
          <input
            v-model="clientForm.primaryColor"
            class="color-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Address
          </label>
          <input
            v-model="clientForm.address"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Company Logo
          </label>
          <input
            :value="clientForm.companyLogo"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            @change="fileChange"
            multiple
            type="file"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Site Type
          </label>
          <input
            v-model="clientForm.siteType"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
          />
        </div>
      </div>
      <input
        class="flex bg-gray-700 hover:bg-gray-500 text-white px-3 py-1 rounded text-lg focus:outline-none shadow"
        type="submit"
        value="submit"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, Events, onMounted, reactive } from "vue";
import Huebee from "huebee";
import form from "vuejs-form";
import { ClientSetting } from "../interface/profileSetting.interface";
import { profileSettingService } from '../services/profileSettingService';

export default defineComponent({
  name: "ClientSetting",
  async setup() {
    //#region data region
    const frequencyOption = [
      { text: "Daily", value: "Daily" },
      { text: "Weekly", value: "Weekly" },
      { text: "Monthly", value: "Monthly" }
    ];
    const clientSettingModel1: ClientSetting = {
      profileName: "",
      client: "",
      website: "",
      frequency: "",
      baselineDate: "",
      primaryColor: "#BF8040",
      companyLogo: null,
      ProfileDescription: "",
      contactPerson: "",
      email: "",
      address: "",
      siteType: "",
      frequencyDropDown: [],
      siteTypeDropDown: []
    };
    let clientSettingModel = {} as ClientSetting;
    //#endregion
 const getTest = async () => {
      console.log("fetching data");
       const result = await profileSettingService.getClientFormDataAsync();
       console.log(result);
       console.log("got data");
       clientSettingModel = result;
       console.log(clientSettingModel);

    };
 await getTest();
    //#region form properties and its validation declaration
    const clientForm = reactive(form(clientSettingModel));
    //#endregion
    const save = () => {
      console.log("hello");
      console.log(clientSettingModel);
    };
    const fileChange = (event: any) => {
      const fiile: File = event.target.files[0];
      const filelist: FileList = event.target.files;
      console.log(filelist);
      console.log(event.target.files[0]);
      console.log(fiile.type);
      clientSettingModel.companyLogo = event.target.files[0];
    };
   

    onMounted(() => {
      const hueb = new Huebee(".color-input", {
        // options
        notation: "hex",
        saturations: 2,
        setText: true
      });
      hueb.on("change", function(color: any, hue: any, sat: any, lum: any) {
        clientSettingModel.primaryColor = color;
        //alert( 'color changed to: ' + color )
      });
    });

    return { clientForm, save, fileChange, frequencyOption };
  }
});
</script>

<style scoped>
@import "~huebee/dist/huebee.min.css";
</style>