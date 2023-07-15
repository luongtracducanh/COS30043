import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TypeList from "@/views/TypeList.vue";
import CategoryList from "@/views/CategoryList.vue";
import IngredientList from "@/views/IngredientList.vue";
import CocktailDetails from "@/views/CocktailDetails.vue";
import SearchCocktail from "@/views/SearchCocktail.vue";
import IngredientDetails from "@/views/IngredientDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: 'about' */ "../views/About.vue"),
  },
  {
    path: "/types",
    name: "TypeList",
    component: TypeList,
  },
  {
    path: "/categories",
    name: "CategoryList",
    component: CategoryList,
  },
  {
    path: "/ingredients",
    name: "IngredientList",
    component: IngredientList,
  },
  {
    path: "/cocktail/:cocktailId",
    alias: "/cocktails/:cocktailId",
    name: "CocktailDetails",
    component: CocktailDetails,
    props: true,
  },
  {
    path: "/searchCocktail/",
    name: "SearchCocktail",
    component: SearchCocktail,
    props: true,
  },
  {
    path: "/ingredient/:ingredientId",
    name: "IngredientDetails",
    component: IngredientDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
