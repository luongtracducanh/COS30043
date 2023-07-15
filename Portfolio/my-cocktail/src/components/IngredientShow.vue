<template>
  <div
    class="card border border-3 border-dark"
    style="width: 18rem; background-color: black"
  >
    <img
      class="card-img-top border-bottom border-3 border-dark ingredient-show-img"
      style="background-color: hsla(32, 27%, 82%, 1)"
      :src="`${
        'https://www.thecocktaildb.com/images/ingredients/' +
        ingredient.strIngredient1.replaceAll(' ', '%20') +
        '.png'
      }`"
      :alt="ingredient.strIngredient1"
    />
    <div
      class="card-body d-flex justify-content-center align-items-center"
      style="height: 4rem"
    >
      <span class="card-title h5 my-0">{{ ingredient.strIngredient1 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "IngredientShow",
  props: {
    ingredient: Object,
  },
};
</script>

<style>
.ingredient-show-img {
  background: linear-gradient(135deg, hsla(32, 27%, 99%, 1), hsla(32, 27%, 80%, 1));
}
</style>