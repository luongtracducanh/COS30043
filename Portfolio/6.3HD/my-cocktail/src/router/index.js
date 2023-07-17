import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailView from "../views/DetailView.vue";
import SearchView from "../views/SearchView.vue";
import CategoryView from "../views/CategoryView.vue";
import IngredientView from "../views/IngredientView.vue";
import IngredientDetail from "../views/IngredientDetail.vue";
import AlcoholicView from "../views/AlcoholicView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/detail/:idDrink",
    alias: "/details/:idDrink",
    name: "DetailView",
    component: DetailView,
    props: true,
  },
  {
    path: "/search",
    name: "SearchView",
    component: SearchView,
    props: true,
  },
  {
    path: "/categories/",
    name: "CategoryView",
    component: CategoryView,
    props: true,
  },
  {
    path: "/ingredients/",
    name: "IngredientView",
    component: IngredientView,
    props: true,
  },
  {
    path: "/ingredient/:name",
    name: "IngredientDetail",
    component: IngredientDetail,
    props: true,
  },
  {
    path: "/alcoholics/",
    name: "AlcoholicView",
    component: AlcoholicView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
