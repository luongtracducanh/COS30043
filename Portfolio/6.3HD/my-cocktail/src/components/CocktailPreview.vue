<template>
  <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
  <p>{{ cocktail.strDrink }}</p>
</template>

<script>
export default {
  name: "CocktailPreview",
  props: {
    cocktail: {},
  },
};
</script>

<style>
img {
  width: 250px;
  height: 250px;
}
</style>
