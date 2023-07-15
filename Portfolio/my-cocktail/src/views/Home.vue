<template>
  <div class="home container-fluid ps-0 pe-0" id="home">
    <div class="row pt-5 pb-5 m-auto" style="background-color: white">
      <div
        class="
          col-md-12 col-lg-6
          ps-lg-5
          d-flex
          flex-column
          justify-content-center
          align-items-center
        "
      >
        <img
          src="@/assets/logo-2.png"
          class="
            col-7 col-md-5 col-lg-7 col-xl-6
            border border-3 border-dark
            rounded
            mb-4
            headTitle
          "
          alt=""
        />
        <span class="h3 pb-1" style="diplay: block"
          >The place where you can find the drink of your dreams</span
        >
      </div>
      <div class="col-md-12 col-lg-6 px-lg-5 d-none d-lg-block">
        <div class="container-fluid">
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
              <span class="h3">Featured cocktail</span>
            </div>
          </div>
          <div class="row px-0 rounded-bottom border border-3 border-dark">
            <div class="col-6 px-0 border-end border-3 border-dark">
              <img
                :src="cocktailFeatured.strDrinkThumb"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="col-6 px-0 d-flex flex-column justify-content-between">
              <div
                class="border-bottom border-3 border-dark pt-1 section-header"
              >
                <span class="h4">Cocktail's name</span>
              </div>
              <div>
                <span class="h4">{{ cocktailFeatured.strDrink }}</span>
              </div>
              <div
                class="
                  border-bottom border-top border-3 border-dark
                  py-1
                  d-none d-xl-block
                  section-header
                "
              >
                <span class="h4">Cocktail's category</span>
              </div>
              <div class="d-none d-xl-block">
                <span class="h4">{{ cocktailFeatured.strCategory }}</span>
              </div>

              <div class="border-top border-3 border-dark">
                <div class="d-grid gap-2 col-8 py-2 mx-auto">
                  <button
                    class="
                      btn btn-light
                      border border-2 border-dark
                      buttonTitle
                    "
                    type="button"
                    @click="
                      $router.push({
                        name: 'CocktailDetails',
                        params: { cocktailId: cocktailFeatured.idDrink },
                      })
                    "
                  >
                    <span class="h5">More info</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-5 pb-5 m-auto" style="background-color: #d9d7d2">
      <div
        class="
          col col-md-12 col-lg-6
          ps-lg-5
          d-flex
          flex-column
          justify-content-center
          align-items-center
        "
      >
        <span class="h2" style="font-weight: bold"
          >Search your cocktail by their category</span
        >
        <span class="h3 pb-1" style="diplay: block"
          >Find your cocktail more easily, choosing their category</span
        >
        <button
          type="button"
          class="
            btn btn-light btn-lg
            d-grid
            gap-2
            col-3
            py-2
            mx-auto
            border border-2 border-dark
            buttonTitle
          "
          @click="$router.push({ name: 'CategoryList' })"
        >
          Try it!
        </button>
      </div>
      <div class="col-md-12 col-lg-6 px-lg-5 d-none d-lg-block">
        <CocktailListShow
          :cocktails="cocktailsCategory"
          :title="`${'Cocktails category: ' + cocktailFeatured.strCategory}`"
        />
      </div>
    </div>
    <div class="row pt-5 pb-5 m-auto" style="background-color: #f5efbf">
      <div
        class="
          col col-md-12 col-lg-6
          ps-lg-5
          d-flex
          flex-column
          justify-content-center
          align-items-center
        "
      >
        <span class="h2" style="font-weight: bold"
          >Search your cocktail by their ingredients</span
        >
        <span class="h3 pb-1" style="diplay: block"
          >Start looking for your cocktail by their ingredients</span
        >
        <button
          type="button"
          class="
            btn btn-light btn-lg
            d-grid
            gap-2
            col-3
            py-2
            mx-auto
            border border-2 border-dark
            buttonTitle
          "
        >
          Try it!
        </button>
      </div>
      <div class="col-md-12 col-lg-6 px-lg-5 d-none d-lg-block">
        <CocktailListShow
          :cocktails="cocktailsIngredients"
          :title="`${
            'Cocktails ingredient: ' + cocktailFeatured.strIngredient1
          }`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CocktailListShow from "@/components/CocktailListShow.vue";
import CocktailService from "@/services/CocktailService";

export default {
  name: "Home",
  data() {
    return {
      cocktailFeatured: "",
      cocktailsCategory: [],
      cocktailsIngredients: [],
    };
  },
  components: {
    CocktailListShow,
  },
  mounted() {
    window.scrollTo(0, 0);
    CocktailService.getRandom()
      .then((cocktail) => {
        this.cocktailFeatured = cocktail;
        CocktailService.getCocktailsByCategory(cocktail.strCategory)
          .then((cocktailsCategory) => {
            this.cocktailsCategory = cocktailsCategory;
          })
          .catch((err) => {
            console.log(err);
          });
        CocktailService.getCocktailsByIngredient(cocktail.strIngredient1)
          .then((cocktailsIngredients) => {
            this.cocktailsIngredients = cocktailsIngredients;
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
