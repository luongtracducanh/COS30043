<template>
  <img
    :src="`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1.replaceAll(
      ' ',
      '%20'
    )}.png`"
    :alt="ingredient.strIngredient1"
  />
  <p>{{ ingredient.strIngredient1 }}</p>
</template>

<script>
export default {
  name: "IngredientPreview",
  props: {
    ingredient: {},
  },
};
</script>
