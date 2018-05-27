import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Sign from "./views/Sign.vue";
import Issue from "./views/Issue.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/sign",
      name: "sign",
      component: Sign
    },
    {
      path: "/issue",
      name: "issue",
      component: Issue
    }
  ]
});
