<template>
  <div class="container-fluid my-5">
    <div class="row">
      <div class="offset-1 offset-lg-2 col-10 col-lg-8">
        <div class="continer fluid">
          <div
            class="
              row
              pt-2
              pb-2
              rounded-top
              border-end border-start border-top border-3 border-dark
              headTitle
            "
          >
            <div class="col">
              <span class="h3">Ingredients</span>
            </div>
          </div>
          <div
            class="
              row row-cols-auto
              justify-content-around
              pt-4
              border-top
              border-end
              border-start
              border-bottom
              border-3
              border-dark
              rounded-bottom
            "
          >
            <div
              class="col justify-content-center mb-4"
              v-for="(ingredient, idx) in ingredients"
              :key="idx"
              @click="
                $router.push({
                  name: 'SearchCocktail',
                  query: { ingredient: ingredient.strIngredient1 },
                })
              "
            >
              <IngredientShow :ingredient="ingredient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import IngredientShow from "@/components/IngredientShow.vue";
import CocktailService from "@/services/CocktailService";

export default {
  name: "IngredientList",
  data() {
    return {
      name: "",
      ingredients: [],
    };
  },
  components: {
    IngredientShow,
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
  },
  methods: {
    filterIngredientByName: function () {
      console.log("hola");
    },
  },
};
</script>
