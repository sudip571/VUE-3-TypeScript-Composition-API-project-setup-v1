declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
declare module "vuejs-form";
declare module '@/datepicker/index.js';
declare module "huebee";
