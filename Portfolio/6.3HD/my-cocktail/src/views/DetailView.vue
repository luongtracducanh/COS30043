<template>
  <h1>Cocktail Information</h1>
  <p>Name: {{ cocktail.strDrink }}</p>
  <p>Category: {{ cocktail.strCategory }}</p>
  <p>Alcoholic: {{ cocktail.strAlcoholic }}</p>
  <p>Glass: {{ cocktail.strGlass }}</p>
  <p>Instructions: {{ cocktail.strInstructions }}</p>
  <p>Ingredients:</p>
  <ul>
    <li v-for="ingredient in ingredients" :key="ingredient">
      {{ ingredient }}
    </li>
  </ul>
  <p>Image: <img :src="cocktail.strDrinkThumb" /></p>
</template>

<script>
import CocktailAPI from "../apis/CocktailAPI";

export default {
  name: "DetailView",
  props: ['idDrink'],
  data() {
    return {
      cocktail: {},
      instruction: [],
      ingredients: [],
    };
  },
  mounted() {
    CocktailAPI.getCocktailById(this.$route.params.idDrink)
      .then((cocktail) => {
        this.cocktail = cocktail;
        this.ingredients = Object.keys(cocktail)
          .filter((key) => key.startsWith("strIngredient"))
          .map((key) => cocktail[key])
          .filter((ingredient) => ingredient !== null);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
