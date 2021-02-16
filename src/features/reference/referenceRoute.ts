import { RouteRecordRaw } from "vue-router";


const routesReference: Array<RouteRecordRaw> = [
    {
        path: "/reference",
        name: "Reference",
        component: () =>
        import(/* webpackChunkName: "reference" */ "@/features/reference/Reference.vue"),
        meta: {
            requiresAuth: true,  
            //visible:true    
        }        
      }
    ];

    export const referenceRoute = {routesReference} ;