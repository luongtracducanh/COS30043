<template>
  <h1>Ingredient Information</h1>
  <p><img :src="image" /></p>
  <p>Name: {{ ingredient.strIngredient }}</p>
  <p>
    Description:
    {{
      ingredient.strDescription
        ? ingredient.strDescription
        : "No description available"
    }}
  </p>
  <p>
    Type: {{ ingredient.strType ? ingredient.strType : "No type available" }}
  </p>
  <p>Alcoholic: {{ ingredient.strAlcohol }}</p>
  <p>Alcohol by volume: {{ ingredient.strABV ? ingredient.strABV : 0 }}%</p>
  <button
    @click="
      $router.push({
        name: 'SearchView',
        query: { ingredient: ingredient.strIngredient.toLowerCase() },
      })
    "
  >
    Cocktails that use this ingredient
  </button>
</template>

<script>
import CocktailAPI from "@/apis/CocktailAPI";

export default {
  name: "IngredientDetail",
  props: {
    name: {
      type: "",
      required: true,
    },
  },
  data() {
    return {
      ingredient: "",
      image: "",
    };
  },
  mounted() {
    CocktailAPI.getIngredientByName(this.$route.params.name)
      .then((ingredient) => {
        this.ingredient = ingredient;
        this.image = `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient.replaceAll(
          " ",
          "%20"
        )}.png`;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
img {
  width: 250px;
  height: 250px;
}
</style>
