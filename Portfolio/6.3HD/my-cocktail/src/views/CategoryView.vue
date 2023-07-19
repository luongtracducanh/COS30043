<template>
  <h1>Categories</h1>
  <div v-for="category in categories" :key="category.strCategory">
    <button
      @click="
        $router.push({
          name: 'SearchView',
          query: { category: category.strCategory },
        })
      "
    >
      {{ category.strCategory === "Beer" ? "Dads' fav" : category.strCategory }} 
    </button>
  </div>
</template>

<script>
import CocktailAPI from "../apis/CocktailAPI";

export default {
  name: "CategoryView",
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    CocktailAPI.getAllCategories()
      .then((categories) => {
        this.categories = categories;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
