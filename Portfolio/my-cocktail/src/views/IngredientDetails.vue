<template>
  <div class="container-fluid my-5">
    <div class="row">
      <div class="offset-1 offset-lg-2 offset-xl-3 col-10 col-lg-8 col-xl-6">
        <div class="continer fluid"></div>
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
            <span class="h3">Ingredient's Information</span>
          </div>
        </div>
        <div class="row px-0 border border-3 border-dark">
          <div class="col-12 d-md-none px-0 border-bottom border-3 border-dark">
            <img :src="image" alt="" style="height: 100%; width: 100%" />
          </div>
          <div
            class="
              col-4
              d-none d-md-block d
              px-0
              border-end border-3 border-dark
            "
          >
            <img :src="image" alt="" style="height: 100%; width: 100%" />
          </div>
          <div class="col-12 col-md-8 px-0">
            <div class="border-bottom border-3 border-dark pt-1 section-header">
              <span class="h4">Ingredient's name</span>
            </div>
            <div class="py-1">
              <span class="h4">{{ ingredient.strIngredient }}</span>
            </div>
            <div
              class="
                border-bottom border-top border-3 border-dark
                pt-1
                section-header
              "
            >
              <span class="h4">Ingredient's type</span>
            </div>
            <div class="py-1">
              <span class="h4" v-if="ingredient.strType === null">-</span>
              <span class="h4" v-else>{{ ingredient.strType }}</span>
            </div>
            <div
              class="
                border-bottom border-top border-3 border-dark
                pt-1
                section-header
              "
            >
              <span class="h4">It has alcohol? </span>
            </div>
            <div class="py-1">
              <span class="h4" v-if="ingredient.strAlcohol === null">-</span>
              <span class="h4" v-else>{{ ingredient.strAlcohol }}</span>
            </div>
            <div
              class="
                border-bottom border-top border-3 border-dark
                pt-1
                section-header
              "
            >
              <span class="h4">Alcohol by volume</span>
            </div>
            <div class="py-1">
              <span class="h4" v-if="ingredient.strABV === null">-</span>
              <span class="h4" v-else>{{ ingredient.strABV }}%</span>
            </div>
          </div>
        </div>
        <div
          class="
            row
            px-0
            border-bottom border-end border-start border-3 border-dark
          "
        >
          <div class="col px-0">
            <div class="border-bottom border-3 border-dark pt-1 section-header">
              <span class="h4">Ingredient's description</span>
            </div>
            <div
              class="px-2 py-1 border-bottom border-1 border"
              v-if="this.ingredient.strDescription === null"
            >
              <span class="h4">-</span>
            </div>
            <div class="px-2 py-1 border-bottom border-1 border mh-50" v-else>
              <p
                class="text-start text-break fs-4 my-0"
                style="white-space: pre-line"
              >
                {{ ingredient.strDescription }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="
            row
            px-0
            rounded-bottom
            border-bottom border-end border-start border-3 border-dark
          "
        >
          <div class="col px-0 py-2">
            <button
              class="btn btn-light border border-2 border-dark buttonTitle"
              type="button"
              @click="
                $router.push({
                  name: 'SearchCocktail',
                  query: { ingredient: ingredient.strIngredient },
                })
              "
            >
              <span class="h4">Cocktails that use this ingredient</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CocktailService from "@/services/CocktailService";

export default {
  name: "IngredientDetails",
  data() {
    return {
      ingredient: "",
      image: "",
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    CocktailService.getIngredientById(this.$route.params.ingredientId)
      .then((ingredient) => {
        this.ingredient = ingredient;
        this.image = `${
          "https://www.thecocktaildb.com/images/ingredients/" +
          ingredient.strIngredient.replaceAll(" ", "%20") +
          ".png"
        }`;
        console.log(this.ingredient);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
