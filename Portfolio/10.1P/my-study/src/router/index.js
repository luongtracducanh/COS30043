import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Tasks from "../components/Tasks.vue";
import Units from "../components/Units.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: Tasks,
  },
  {
    path: "/units",
    name: "units",
    component: Units,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
