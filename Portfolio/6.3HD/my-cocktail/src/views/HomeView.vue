<template>
  <div class="home">
    <h1>Featured cocktail for today</h1>
    <img :src="cocktailToday.strDrinkThumb" />
    <p>Name: {{ cocktailToday.strDrink }}</p>
    <button
      @click="
        $router.push({
          name: 'DetailView',
          params: { idDrink: cocktailToday.idDrink },
        })
      "
    >
      Click here for more information
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import CocktailAPI from "@/apis/CocktailAPI";

export default {
  name: "HomeView",
  data() {
    return {
      cocktailToday: "",
    };
  },
  mounted() {
    CocktailAPI.getRandomCocktail().then((cocktail) => {
      this.cocktailToday = cocktail;
    });
  },
};
</script>
