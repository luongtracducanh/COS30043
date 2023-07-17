<template>
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
    <p>{{ cocktail.strDrink }}</p>
  </div>
</template>

<script>
import CocktailAPI from "../apis/CocktailAPI";
import CocktailPreview from "../components/CocktailPreview.vue";

export default {
  name: "SearchView",
  data() {
    return {
      cocktails: [],
    };
  },
  components: {
    CocktailPreview,
  },
  mounted() {
    this.getCocktails();
  },
  computed: {
    msg() {
      return `Showing ${this.cocktails.length} results for ${this.$route.query.name}`;
    },
  },
  methods: {
    getCocktails() {
      // search cocktails by name
      if (Object.keys(this.$route.query).includes("name")) {
        CocktailAPI.getCocktailByName(this.$route.query.name)
          .then((newCocktails) => {
            if (newCocktails === null) {
              this.cocktails = [];
            } else {
              console.log(newCocktails);
              this.cocktails = newCocktails;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    deleteFromQuery: function (property) {
      let query = Object.assign({}, this.$route.query);
      delete query[property];
      this.$router.replace({ query });
    },
  },
};
</script>
