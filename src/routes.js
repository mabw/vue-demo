import Vue from "vue";
import Router from "vue-router";
import ListPanel from "./components/ListPanel.vue";
import DemoView from "./components/DemoView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: ListPanel },
    { path: "/demo", component: DemoView },
  ],
});
