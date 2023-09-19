import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UnitsView from "../views/UnitsView.vue";
import TasksView from "../views/TasksView.vue";

const routes = [
  {
    path: "/",
    name: "homeview",
    component: HomeView,
  },
  {
    path: "/units",
    name: "unitsview",
    component: UnitsView,
  },
  {
    path: "/tasks",
    name: "tasksview",
    component: TasksView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
