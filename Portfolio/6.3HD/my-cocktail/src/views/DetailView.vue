<template>
  <h1>Cocktail Information</h1>
  <img :src="cocktail.strDrinkThumb" />
  <p>Name: {{ cocktail.strDrink }}</p>
  <p>Category: {{ cocktail.strCategory }}</p>
  <p>Alcoholic: {{ cocktail.strAlcoholic }}</p>
  <p>Glass: {{ cocktail.strGlass }}</p>
  <p>Instructions: {{ cocktail.strInstructions }}</p>
  <p>Ingredients:</p>
  <div v-for="(ingredient, index) in ingredients" :key="ingredient">
    <button
      @click="
        $router.push({
          name: 'IngredientDetail',
          params: { name: ingredient },
        })
      "
    >
      {{ measures[index] }} {{ ingredient }}
    </button>
  </div>
  <br />
</template>

<script>
import CocktailAPI from "../apis/CocktailAPI";

export default {
  name: "DetailView",
  props: ["idDrink"],
  data() {
    return {
      cocktail: {},
      ingredients: [],
      measures: [],
      ingredientCount: 15,
    };
  },
  mounted() {
    CocktailAPI.getCocktailById(this.$route.params.idDrink)
      .then((cocktail) => {
        this.cocktail = cocktail;
        this.ingredients = [];
        this.measures = [];
        for (let i = 1; i <= this.ingredientCount; i++) {
          const ingredient = cocktail[`strIngredient${i}`];
          const measure = cocktail[`strMeasure${i}`];
          if (ingredient !== null) {
            this.ingredients.push(ingredient);
          }
          if (measure !== null) {
            this.measures.push(measure);
          }
        }
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
