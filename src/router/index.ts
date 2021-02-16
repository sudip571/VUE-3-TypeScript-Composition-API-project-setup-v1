import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import { authService } from '@/services/authService';
import allRoutes from './routeCombine';

let routes: Array<RouteRecordRaw> = [
  
  {
    path: "/",
    redirect:{path: "/home"},    
 },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,  
      //visible:true    
  }
  },
  {
    path: "/about",
    name: "About",    
    // defining component in Lazy-Loading way
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
      meta: {
        requiresAuth: true,      
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props:true
  },  
  {
    path: "/:catchAll(.*)",
    redirect:{path: "/home"}, 
  }
];
routes = routes.concat(allRoutes);
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

//#region navigation guard logic
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const { requiresAuth } = to.meta;
  const currentUser = authService.getUser();

  if (requiresAuth) {
      if (!currentUser) {
          // not logged in so redirect to login page with the return url
          return next({ path: '/login', query: { returnUrl: to.fullPath } });
      }

      // check if route is restricted by role
      // if (authorize.length && !authorize.includes(currentUser.role)) {
      //     // role not authorised so redirect to home page
      //     return next({ path: '/' });
      // }
  }

  next();
})
//#endregion navigation guard logic ends
