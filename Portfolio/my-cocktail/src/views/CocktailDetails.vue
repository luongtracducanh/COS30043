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
            <span class="h3">Cocktail's Information</span>
          </div>
        </div>
        <div class="row px-0 border border-3 border-dark">
          <div
            class="
              col-12
              d-md-none
              px-0
              border-bottom border-3 border-dark
              section-header
            "
          >
            <img
              :src="cocktail.strDrinkThumb"
              alt=""
              style="height: 100%; width: 100%"
            />
          </div>
          <div
            class="
              col-4
              d-none d-md-block d
              px-0
              border-end border-3 border-dark
            "
          >
            <img
              :src="cocktail.strDrinkThumb"
              alt=""
              style="height: 100%; width: 100%"
            />
          </div>
          <div class="col-12 col-md-8 px-0">
            <div class="border-bottom border-3 border-dark pt-1 section-header">
              <span class="h4">Cocktail's name</span>
            </div>
            <div class="py-1">
              <span class="h4">{{ cocktail.strDrink }}</span>
            </div>
            <div
              class="
                border-bottom border-top border-3 border-dark
                pt-1
                section-header
              "
            >
              <span class="h4">Cocktail's category</span>
            </div>
            <div class="py-1">
              <span class="h4">{{ cocktail.strCategory }}</span>
            </div>
            <div
              class="
                border-bottom border-top border-3 border-dark
                pt-1
                section-header
              "
            >
              <span class="h4">Cocktail's drink type</span>
            </div>
            <div class="py-1">
              <span class="h4">{{ cocktail.strAlcoholic }}</span>
            </div>
            <div
              class="
                border-bottom border-top border-3 border-dark
                pt-1
                section-header
              "
            >
              <span class="h4">Cocktail's glass</span>
            </div>
            <div class="py-1">
              <span class="h4">{{ cocktail.strGlass }}</span>
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
          <div class="col px-0">
            <div class="border-bottom border-3 border-dark pt-1 section-header">
              <span class="h4">Cocktail's preparation instructions</span>
            </div>
            <div
              class="px-2 py-1 border-bottom border-1 border"
              v-if="this.instructions.length === 0"
            >
              <span class="h4">-</span>
            </div>
            <div
              class="px-2 py-1 border-bottom border-1 border"
              v-else
              v-for="(instruction, idx) in instructions"
              :key="idx"
            >
              <span class="h4">{{ instruction }}</span>
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
          <div class="col px-0">
            <div class="border-bottom border-3 border-dark pt-1 section-header">
              <span class="h4">Cocktail's ingredients</span>
            </div>
            <div class="list-group">
              <button
                class="list-group-item list-group-item-action"
                v-for="(ingredient, idx) in ingredients"
                :key="idx"
                @click="
                  $router.push({
                    name: 'IngredientDetails',
                    params: { ingredientId: ingredient.name },
                  })
                "
              >
                <span class="h4"
                  >{{ ingredient.measure }} {{ ingredient.name }}</span
                >
              </button>
            </div>
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
  name: "CocktailDetails",
  data() {
    return {
      cocktail: {},
      instructions: [],
      ingredients: [],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    CocktailService.getCocktailById(this.$route.params.cocktailId)
      .then((cocktail) => {
        this.cocktail = cocktail;
        cocktail.strInstructions.length === 0
          ? ""
          : (this.instructions = cocktail.strInstructions.split(/\.+ |!+ /));
        for (let i = 1; i < 16; i++) {
          if (
            cocktail[`${"strIngredient" + i}`] === "" ||
            cocktail[`${"strIngredient" + i}`] === null
          ) {
            break;
          } else {
            this.ingredients.push({
              name: cocktail[`${"strIngredient" + i}`],
              measure: cocktail[`${"strMeasure" + i}`],
            });
          }
        }
        console.log(cocktail.strInstructions);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
