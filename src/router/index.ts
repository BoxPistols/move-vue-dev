import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/model",
    name: "Model",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Model.vue")
  },
  {
    path: "/comp",
    name: "Comp",
    component: () => import("../views/Comp.vue")
  },
  {
    path: "/event",
    name: "Event",
    component: () => import("../views/Event.vue")
  },
  {
    path: "/data",
    name: "Data",
    component: () => import("../views/Data.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
