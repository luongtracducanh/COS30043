<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <span>Alcoholic Options</span>
        <select
          v-model="selectedType"
          @change="updateType($event.target.value)"
        >
          <option value="">Select Type</option>
          <option v-for="type in types" :key="type" :value="type.strAlcoholic">
            {{ type.strAlcoholic }}
          </option>
        </select>
      </div>
      <div class="col-3">
        <span>Categories</span>
        <select
          v-model="selectedCategory"
          @change="updateCategory($event.target.value)"
        >
          <option value="">Select Category</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category.strCategory"
          >
            {{
              category.strCategory === "Beer"
                ? "Dads' fav"
                : category.strCategory
            }}
          </option>
        </select>
      </div>
      <div class="col-3">
        <span>Glasses</span>
        <select
          v-model="selectedGlass"
          @change="updateGlass($event.target.value)"
        >
          <option value="">Select Glass</option>
          <option v-for="glass in glasses" :key="glass" :value="glass.strGlass">
            {{ glass.strGlass }}
          </option>
        </select>
      </div>
      <div class="col-3">
        <span>Ingredients</span>
        <select
          v-model="selectedIngredient"
          @change="updateIngredient($event.target.value)"
        >
          <option value="">Select Ingredient</option>
          <option
            v-for="ingredient in ingredients"
            :key="ingredient"
            :value="ingredient.strIngredient1.toLowerCase()"
          >
            {{ ingredient.strIngredient1 }}
          </option>
        </select>
      </div>
    </div>
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
      selectedType: this.$route.query.type || "",
      selectedCategory: this.$route.query.category || "",
      selectedGlass: this.$route.query.glass || "",
      selectedIngredient: this.$route.query.ingredient || "",
    };
  },
  mounted() {
    CocktailAPI.getAllIngredients()
      .then((ingredients) => {
        this.ingredients = ingredients.sort((a, b) => {
          if (a.strIngredient1 < b.strIngredient1) return -1;
          if (a.strIngredient1 > b.strIngredient1) return 1;
          return 0;
        });
      })
      .catch((err) => {
        console.log(err);
      });
    CocktailAPI.getAllCategories()
      .then((categories) => {
        this.categories = categories.sort((a, b) => {
          if (a.strCategory < b.strCategory) return -1;
          if (a.strCategory > b.strCategory) return 1;
          return 0;
        });
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
        this.glasses = glasses.sort((a, b) => {
          if (a.strGlass < b.strGlass) return -1;
          if (a.strGlass > b.strGlass) return 1;
          return 0;
        });
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
    updateType(value) {
      if (value !== "")
        this.$router.push({
          name: "SearchView",
          query: { ...this.$route.query, type: value },
        });
      else this.deleteFromQuery("type");
    },
    updateCategory(value) {
      if (value !== "")
        this.$router.push({
          name: "SearchView",
          query: { ...this.$route.query, category: value },
        });
      else this.deleteFromQuery("category");
    },
    updateGlass(value) {
      if (value !== "")
        this.$router.push({
          name: "SearchView",
          query: { ...this.$route.query, glass: value },
        });
      else this.deleteFromQuery("glass");
    },
    updateIngredient(value) {
      if (value !== "")
        this.$router.push({
          name: "SearchView",
          query: { ...this.$route.query, ingredient: value },
        });
      else this.deleteFromQuery("ingredient");
    },
  },
};
</script>
