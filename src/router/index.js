import { createRouter, createWebHistory } from "vue-router";
import Options from "../views/Options.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "options",
      component: Options,
    },
    {
      path: "/composition",
      name: "composition",
      component: () => import("../views/Composition.vue"),
    },
  ],
});

export default router;
