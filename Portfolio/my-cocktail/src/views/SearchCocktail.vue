<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 col-xl-3 col-xxl-2 d-none d-lg-block pt-4 px-0">
        <SearchCocktailFilter />
      </div>
      <div
        class="offcanvas offcanvas-start px-0 d-none-lg"
        data-bs-backdrop="true"
        tabindex="-1"
        id="offcanvasFilter"
      >
        <div class="offcanvas-header pb-1">
          <h5 class="offcanvas-title">Search filters</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body ps-0 pe-4">
          <SearchCocktailFilter />
        </div>
      </div>
      <div class="col-md-12 col-lg-9 col-xl-9 col-xxl-10 px-0">
        <div class="container-fluid">
          <div class="row pt-4">
            <div class="col text-center position-relative">
              <button
                type="button"
                class="btn btn-dark d-lg-none position-absolute top-0 start-0"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasFilter"
              >
                <i class="bi bi-filter"></i>
              </button>
              <span class="fs-4">{{ resumeSearch }}</span>
            </div>
          </div>
          <div
            class="row row-cols-auto justify-content-around pt-3"
            id="categoryShowCocktails"
          >
            <div
              class="col justify-content-center mb-4"
              v-for="(cocktail, idx) in cocktails"
              :key="idx"
              @click="
                $router.push({
                  name: 'CocktailDetails',
                  params: { cocktailId: cocktail.idDrink },
                })
              "
            >
              <CocktailShow :cocktail="cocktail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CocktailShow from "@/components/CocktailShow.vue";
import SearchCocktailFilter from "@/components/SearchCocktailFilter.vue";
import CocktailService from "@/services/CocktailService";

export default {
  name: "SearchCocktail",
  data() {
    return {
      cocktails: [],
    };
  },
  components: {
    CocktailShow,
    SearchCocktailFilter,
  },
  mounted() {
    window.scrollTo(0, 0);
    this.getCocktails();
  },
  watch: {
    $route() {
      this.getCocktails();
    },
  },
  computed: {
    resumeSearch: function () {
      return `${"Showing " + this.cocktails.length + " results"}`;
    },
  },
  methods: {
    getCocktails: function () {
      if (Object.keys(this.$route.query).includes("name")) {
        CocktailService.getCocktailsByName(this.$route.query.name)
          .then((newCocktails) => {
            if (newCocktails === null) {
              this.cocktails = "";
            } else {
              if (Object.keys(this.$route.query).includes("type"))
                newCocktails = newCocktails.filter((cocktail) => {
                  return cocktail.strAlcoholic === this.$route.query.type;
                });
              if (Object.keys(this.$route.query).includes("category"))
                newCocktails = newCocktails.filter((cocktail) => {
                  return cocktail.strCategory === this.$route.query.category;
                });
              if (Object.keys(this.$route.query).includes("ingredient"))
                newCocktails = newCocktails.filter((cocktail) => {
                  return Object.values(cocktail).includes(
                    this.$route.query.ingredient
                  );
                });
              console.log(newCocktails);
              this.cocktails = newCocktails;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        let newCocktails = "";
        CocktailService.getCocktailsByType(this.$route.query.type)
          .then((typeCocktails) => {
            CocktailService.getCocktailsByCategory(
              this.$route.query.category
            ).then((categoryCocktails) => {
              CocktailService.getCocktailsByIngredient(
                this.$route.query.ingredient
              ).then((ingredientCocktails) => {
                if (Object.keys(this.$route.query).includes("type"))
                  newCocktails = typeCocktails;
                if (Object.keys(this.$route.query).includes("category")) {
                  newCocktails === ""
                    ? (newCocktails = categoryCocktails)
                    : (newCocktails = newCocktails.filter((cocktail) => {
                        return categoryCocktails
                          .map((cocktail) => {
                            return cocktail.idDrink;
                          })
                          .includes(cocktail.idDrink);
                      }));
                }
                if (Object.keys(this.$route.query).includes("ingredient")) {
                  newCocktails === ""
                    ? (newCocktails = ingredientCocktails)
                    : (newCocktails = newCocktails.filter((cocktail) => {
                        return ingredientCocktails
                          .map((cocktail) => {
                            return cocktail.idDrink;
                          })
                          .includes(cocktail.idDrink);
                      }));
                }
                this.cocktails = newCocktails;
              });
            });
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
