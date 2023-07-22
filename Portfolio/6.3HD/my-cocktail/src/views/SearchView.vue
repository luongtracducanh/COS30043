<template>
  <SearchFilter />
  <p>{{ msg }}</p>
  <div
    v-for="cocktail in cocktails"
    :key="cocktail.idDrink"
    @click="
      $router.push({
        name: 'DetailView',
        params: { idDrink: cocktail.idDrink },
      })
    "
  >
    <CocktailPreview :cocktail="cocktail" />
  </div>
</template>

<script>
import CocktailAPI from "../apis/CocktailAPI";
import CocktailPreview from "../components/CocktailPreview.vue";
import SearchFilter from "../components/SearchFilter.vue";

function hasMatchingIngredient(cocktail, ingredient) {
  const ingredientProperties = [
    "strIngredient1",
    "strIngredient2",
    "strIngredient3",
    "strIngredient4",
    "strIngredient5",
    "strIngredient6",
    "strIngredient7",
    "strIngredient8",
    "strIngredient9",
    "strIngredient10",
    "strIngredient11",
    "strIngredient12",
    "strIngredient13",
    "strIngredient14",
    "strIngredient15",
  ];
  for (const property of ingredientProperties) {
    if (
      cocktail[property] !== null &&
      cocktail[property].toLowerCase() === ingredient.toLowerCase()
    ) {
      return true;
    }
  }
  return false;
}

export default {
  name: "SearchView",
  data() {
    return {
      cocktails: [],
      appendedCocktails: [],
    };
  },
  components: {
    CocktailPreview,
    SearchFilter,
  },
  mounted() {
    this.getCocktails();
  },
  watch: {
    $route() {
      this.getCocktails();
    },
  },
  computed: {
    msg() {
      return `${this.cocktails.length} results found`;
    },
  },
  methods: {
    getCocktails() {
      // querry using name as parameter
      if (Object.keys(this.$route.query).includes("name"))
        CocktailAPI.getCocktailByName(this.$route.query.name)
          .then((newCocktails) => {
            if (newCocktails === null) this.cocktails = [];
            else {
              if (Object.keys(this.$route.query).includes("category"))
                newCocktails = newCocktails.filter((cocktail) => {
                  return cocktail.strCategory === this.$route.query.category;
                });
              if (Object.keys(this.$route.query).includes("ingredient"))
                newCocktails = newCocktails.filter((cocktail) =>
                  hasMatchingIngredient(cocktail, this.$route.query.ingredient)
                );
              if (Object.keys(this.$route.query).includes("type"))
                newCocktails = newCocktails.filter((cocktail) => {
                  return cocktail.strAlcoholic === this.$route.query.type;
                });
              if (Object.keys(this.$route.query).includes("glass"))
                newCocktails = newCocktails.filter((cocktail) => {
                  return cocktail.strGlass === this.$route.query.glass;
                });
              this.cocktails = newCocktails;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      // query using ingredient as parameter
      else if (Object.keys(this.$route.query).includes("ingredient"))
        CocktailAPI.getCocktailByIngredient(this.$route.query.ingredient)
          .then((newCocktails) => {
            if (newCocktails === null) this.cocktails = [];
            else {
              this.cocktails = newCocktails;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      // query using category as parameter
      else if (Object.keys(this.$route.query).includes("category"))
        CocktailAPI.getCocktailByCategory(this.$route.query.category)
          .then((newCocktails) => {
            if (newCocktails === null) this.cocktails = [];
            else {
              this.cocktails = newCocktails;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      // query using type as parameter
      else if (Object.keys(this.$route.query).includes("type"))
        CocktailAPI.getCocktailByType(this.$route.query.type)
          .then((newCocktails) => {
            if (newCocktails === null) this.cocktails = [];
            else {
              this.cocktails = newCocktails;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      // query using glass as parameter
      else if (Object.keys(this.$route.query).includes("glass"))
        CocktailAPI.getCocktailByGlass(this.$route.query.glass)
          .then((newCocktails) => {
            if (newCocktails === null) this.cocktails = [];
            else {
              this.cocktails = newCocktails;
            }
          })
          .catch((err) => {
            console.log(err);
          });
    },
    deleteFromQuery: function (property) {
      let query = Object.assign({}, this.$route.query);
      delete query[property];
      this.$router.replace({ query });
    },
  },
};
</script>
