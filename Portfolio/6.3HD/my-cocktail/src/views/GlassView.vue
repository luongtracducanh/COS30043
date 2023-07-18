<template>
  <h1>Glasses</h1>
  <div v-for="glass in glasses" :key="glass.strGlass">
    <button
      @click="
        $router.push({
          name: 'SearchView',
          query: { glass: glass.strGlass },
        })
      "
    >
      {{ glass.strGlass }}
    </button>
  </div>
</template>

<script>
import CocktailAPI from "@/apis/CocktailAPI";

export default {
  name: "GlassView",
  data() {
    return {
      glasses: [],
    };
  },
  mounted() {
    CocktailAPI.getAllGlasses()
      .then((glasses) => {
        this.glasses = glasses;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
