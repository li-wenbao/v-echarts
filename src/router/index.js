import Vue from "vue";
import Router from "vue-router";
// import VeCharts from "@/components/v-eCharts";
import Index from "@/page/index";
import CommList from "@/page/commList";
Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "VeCharts",
    //   component: VeCharts
    // },
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/CommList",
      name: "CommList",
      component: CommList
    }
  ]
});
