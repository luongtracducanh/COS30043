<template>
  <div class="container-fluid pe-0">
    <div class="row border border-2 border-dark rounded-top section-header">
      <div class="col border-2 border-dark">
        <span class="fs-4 ps-5">Drink type</span>
      </div>
      <div class="d-flex offset-1 col-1 px-0">
        <button
          v-show="$route.query.type"
          type="button"
          class="px-0 border-0 w-100"
          style="background: transparent"
          @click="deleteFromQuery('type')"
        >
          <i class="bi bi-x-lg pe-2"></i>
        </button>
      </div>
    </div>
    <div class="row border-start border-end border-bottom border-2 border-dark">
      <div class="filter list-group col p-0 fs-6 text-start">
        <button
          type="button"
          class="list-group-item list-group-item-action"
          :class="{
            active: $route.query.type === type.strAlcoholic,
          }"
          v-for="(type, idx) in types"
          :key="idx"
          @click="
            if ($route.query.type !== type.strAlcoholic) {
              $router.push({
                name: 'SearchCocktail',
                query: { ...$route.query, type: type.strAlcoholic },
              });
            }
          "
        >
          <span>
            {{ type.strAlcoholic }}
          </span>
        </button>
      </div>
    </div>
    <div
      class="row border border-2 border-dark rounded-top mt-4 section-header"
    >
      <div class="col-10 border-2 border-dark">
        <span class="ps-5 fs-4">Category</span>
      </div>
      <div class="d-flex offset-1 col-1 px-0">
        <button
          v-show="$route.query.category"
          type="button"
          class="px-0 border-0 w-100"
          style="background: transparent"
          @click="deleteFromQuery('category')"
        >
          <i class="bi bi-x-lg pe-2"></i>
        </button>
      </div>
    </div>
    <div class="row border-start border-end border-bottom border-2 border-dark">
      <div class="filter list-group col p-0 fs-6 text-start">
        <button
          type="button"
          class="list-group-item list-group-item-action"
          :class="{
            active: $route.query.category === category.strCategory,
          }"
          v-for="(category, idx) in categories"
          :key="idx"
          @click="
            $router.push({
              name: 'SearchCocktail',
              query: { ...$route.query, category: category.strCategory },
            })
          "
        >
          <span>
            {{ category.strCategory }}
          </span>
        </button>
      </div>
    </div>
    <div
      class="row border border-2 border-dark rounded-top mt-4 section-header"
    >
      <div class="col border-2 border-dark">
        <span class="ps-5 fs-4">Ingredients</span>
      </div>
      <div class="d-flex offset-1 col-1 px-0">
        <button
          v-show="$route.query.ingredient"
          type="button"
          class="px-0 border-0 w-100"
          style="background: transparent"
          @click="deleteFromQuery('ingredient')"
        >
          <i class="bi bi-x-lg pe-2"></i>
        </button>
      </div>
    </div>
    <div
      class="
        row
        border-start border-end border-bottom border-2 border-dark
        mb-4
      "
      style="max-height: 30vw; overflow: auto"
    >
      <div class="filter list-group col p-0 fs-6 text-start">
        <button
          type="button"
          class="list-group-item list-group-item-action"
          :class="{
            active: $route.query.ingredient === ingredient.strIngredient1,
          }"
          v-for="(ingredient, idx) in ingredients"
          :key="idx"
          @click="
            $router.push({
              name: 'SearchCocktail',
              query: {
                ...$route.query,
                ingredient: ingredient.strIngredient1,
              },
            })
          "
        >
          <span>
            {{ ingredient.strIngredient1 }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CocktailService from "@/services/CocktailService";

export default {
  name: "SearchCocktailFilter",
  data() {
    return {
      types: [],
      categories: [],
      ingredients: [],
      ingredientIdx: "",
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    CocktailService.getAllIngredients()
      .then((ingredients) => {
        ingredients.sort((a, b) =>
          a.strIngredient1 > b.strIngredient1
            ? 1
            : b.strIngredient1 > a.strIngredient1
            ? -1
            : 0
        );
        this.ingredients = ingredients;
      })
      .catch((err) => {
        console.log(err);
      });
    CocktailService.getCategories()
      .then((categories) => {
        this.categories = categories;
      })
      .catch((err) => {
        console.log(err);
      });
    CocktailService.getTypes()
      .then((types) => {
        this.types = types;
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

<style>
.filter > .active,
.filter > :hover {
  color: black;
  background: linear-gradient(
    45deg,
    hsla(76, 73%, 71%, 1),
    hsla(41, 81%, 60%, 1)
  );
  font-weight: bold;
}
</style>