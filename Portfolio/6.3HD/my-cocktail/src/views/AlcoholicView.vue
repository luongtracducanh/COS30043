<template>
  <h1>Types</h1>
  <div v-for="type in types" :key="type.strAlcoholic">
    <button
      @click="
        $router.push({
          name: 'SearchView',
          query: { type: type.strAlcoholic },
        })
      "
    >
      {{ type.strAlcoholic }}
    </button>
  </div>
</template>

<script>
import CocktailAPI from "@/apis/CocktailAPI";

export default {
  name: "AlcoholicView",
  data() {
    return {
      types: [],
    };
  },
  mounted() {
    CocktailAPI.getAlcoholicFilters()
      .then((types) => {
        this.types = types;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
