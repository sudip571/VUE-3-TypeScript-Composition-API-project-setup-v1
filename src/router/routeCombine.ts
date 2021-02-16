import { RouteRecordRaw } from 'vue-router';
import {referenceRoute} from "@/features/reference";
import {profileSettingRoute} from "@/features/profileSetting"

let allRoutes : Array<RouteRecordRaw> = [];
allRoutes = allRoutes.concat(referenceRoute.routesReference,profileSettingRoute.routesProfileSetting,);

export default allRoutes;