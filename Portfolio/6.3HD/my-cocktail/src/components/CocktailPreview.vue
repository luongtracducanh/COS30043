<template>
  <img
    :src="cocktail.strDrinkThumb"
    class="card-img-top border-bottom border-3 border-dark"
    :alt="cocktail.strDrink"
    style="background-color: black"
  />
  <div
    class="card-body d-flex justify-content-center align-items-center"
    style="height: 4rem"
  >
    <span class="card-title h5 my-0">{{ cocktail.strDrink }}</span>
  </div>
</template>

<script>
export default {
  name: "CocktailPreview",
  props: {
    cocktail: {},
  },
};
</script>
