import Vue from "vue";

import VueRouter from "vue-router";
import products from "../views/ProductPage.vue";
import homePage from "../views/homePage.vue";
import NotFound from "../views/notFound.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/homePage" },
  { path: "/products/:search", component: products },
  { path: "*", name: "NotFound", component: NotFound },
  // {
  //   path: "/products",
  //   redirect: (to) => {
  //     // the function receives the target route as the argument
  //     // we return a redirect path/location here.
  //     return { path: "/", query: { q: to.params.search } };
  //   },
  // },
  { path: "/homePage", component: homePage },
];

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes,
});

export default router;
