<template>
  <h1>Ingredients</h1>
  <div
    class="col justify-content-center mb-4"
    v-for="ingredient in ingredients"
    :key="ingredient.strIngredient1"
    @click="
      $router.push({
        name: 'SearchView',
        query: { ingredient: ingredient.strIngredient1 },
      })
    "
  >
    <IngredientPreview :ingredient="ingredient" />
  </div>
</template>

<script>
import IngredientPreview from "@/components/IngredientPreview.vue";
import CocktailAPI from "@/apis/CocktailAPI";

export default {
  name: "IngredientView",
  data() {
    return {
      name: "",
      ingredients: [],
    };
  },
  components: {
    IngredientPreview,
  },
  mounted() {
    CocktailAPI.getAllIngredients()
      .then((ingredients) => {
        this.ingredients = ingredients;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
