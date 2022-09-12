import VueRouter from "vue-router";
import AboutVue from "../views/AboutView.vue";

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [{ path: "/about", component: AboutVue }],
});

export default router;
