<template>
  <div class="container-fluid my-5">
    <div class="row">
      <div class="offset-1 offset-lg-2 offset-xl-3 col-10 col-lg-8 col-xl-6">
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
              <span class="h3">Types</span>
            </div>
          </div>
          <div class="row px-0 rounded-bottom border border-3 border-dark">
            <div class="col-12 px-0" v-for="(type, idx) in types" :key="idx">
              <button
                type="button"
                class="list-group-item list-group-item-action"
                @click="
                  $router.push({
                    name: 'SearchCocktail',
                    query: { type: type.strAlcoholic },
                  })
                "
              >
                <span class="fs-4">
                  {{ type.strAlcoholic }}
                </span>
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
  name: "TypeList",
  data() {
    return {
      types: [],
    };
  },
  components: {},
  mounted() {
    window.scrollTo(0, 0);
    CocktailService.getTypes()
      .then((types) => {
        this.types = types;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
