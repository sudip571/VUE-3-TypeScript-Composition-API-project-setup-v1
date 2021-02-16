import { RouteRecordRaw } from "vue-router";


const routesProfileSetting: Array<RouteRecordRaw> = [
    {
        path: "/profileSetting",
        name: "ProfileSetting",
        component: () =>
        import(/* webpackChunkName: "profileSetting" */ "@/features/profileSetting/components/ProfileSetting.vue"),
        meta: {
            requiresAuth: false,  
            //visible:true    
        }        
      }
    ];

    export const profileSettingRoute = {routesProfileSetting} ;