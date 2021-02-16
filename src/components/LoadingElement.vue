<template>
  <div v-if="isActive && notClosable" @click.prevent="onClose()">
    <div
      wire:loading
      class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-300 opacity-75 flex flex-col items-center justify-center"
    >
      <div
        class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200-200 h-12 w-12 mb-4"
      ></div>
      <h2
        v-if="textMessage.length"
        class="text-center text-black text-xl font-semibold"
      >{{ textMessage }}</h2>
      <p
        v-if="textDescription.length"
        class="w-1/3 text-center text-black-400"
      >{{ textDescription }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoadingElement",
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    canClose: {
      type: Boolean,
      default: false
    },
    textMessage: {
      type: String,
      default: ""
    },
    textDescription: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const notClosable = ref<boolean>(true);
    const onClose = () => {
      if (props.canClose) notClosable.value = false;
    };
    return { notClosable, onClose };
  }
});
</script>

<style scoped>
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>