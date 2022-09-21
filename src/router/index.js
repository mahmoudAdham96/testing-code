import Vue from "vue";

import VueRouter from "vue-router";
import Search from "../views/searchView.vue";
import PageHome from "../views/homeView.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/PageHome" },
  { path: "/search", name: "products", component: Search },
  { path: "/PageHome", name: "products", component: PageHome },
];

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes,
});

export default router;
