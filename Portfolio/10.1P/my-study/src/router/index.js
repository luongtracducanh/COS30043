import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Units from "../components/Units.vue";
import Tasks from "../components/Tasks.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/units",
    name: "units",
    component: Units,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: Tasks,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
