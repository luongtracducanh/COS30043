<template>
  <div>
    <p>Alcoholic Options</p>
    <button v-show="$route.query.type" @click="deleteFromQuery('type')">
      <b>X</b>
    </button>
    <button
      v-for="type in types"
      :key="type"
      @click="
        $router.push({
          name: 'SearchView',
          query: { ...$route.query, type: type.strAlcoholic },
        })
      "
    >
      {{ type.strAlcoholic }}
    </button>
  </div>
  <div>
    <p>Categories</p>
    <button v-show="$route.query.category" @click="deleteFromQuery('category')">
      <b>X</b>
    </button>
    <button
      v-for="category in categories"
      :key="category"
      @click="
        $router.push({
          name: 'SearchView',
          query: { ...$route.query, category: category.strCategory },
        })
      "
    >
      {{ category.strCategory === "Beer" ? "Dads' fav" : category.strCategory }}
    </button>
  </div>
  <div>
    <p>Glasses</p>
    <button v-show="$route.query.glass" @click="deleteFromQuery('glass')">
      <b>X</b>
    </button>
    <button
      v-for="glass in glasses"
      :key="glass"
      @click="
        $router.push({
          name: 'SearchView',
          query: { ...$route.query, glass: glass.strGlass },
        })
      "
    >
      {{ glass.strGlass }}
    </button>
  </div>
  <div>
    <p>Ingredients</p>
    <button
      v-show="$route.query.ingredient"
      @click="deleteFromQuery('ingredient')"
    >
      <b>X</b>
    </button>
    <button
      v-for="ingredient in ingredients"
      :key="ingredient"
      @click="
        $router.push({
          name: 'SearchView',
          query: { ...$route.query, ingredient: ingredient.strIngredient1 },
        })
      "
    >
      {{ ingredient.strIngredient1 }}
    </button>
  </div>
</template>

<script>
import CocktailAPI from "../apis/CocktailAPI";

export default {
  name: "SearchFilter",
  data() {
    return {
      types: [],
      categories: [],
      ingredients: [],
      glasses: [],
    };
  },
  mounted() {
    CocktailAPI.getAllIngredients()
      .then((ingredients) => {
        this.ingredients = ingredients;
      })
      .catch((err) => {
        console.log(err);
      });
    CocktailAPI.getAllCategories()
      .then((categories) => {
        this.categories = categories;
      })
      .catch((err) => {
        console.log(err);
      });
    CocktailAPI.getAlcoholicFilters()
      .then((types) => {
        this.types = types;
      })
      .catch((err) => {
        console.log(err);
      });
    CocktailAPI.getAllGlasses()
      .then((glasses) => {
        this.glasses = glasses;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    deleteFromQuery: function (property) {
      let query = Object.assign({}, this.$route.query);
      delete query[property];
      this.$router.replace({ query });
    },
  },
};
</script>
