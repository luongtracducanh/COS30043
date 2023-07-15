<template>
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
        <span class="h3"
          >{{title}}</span
        >
      </div>
    </div>
    <div
      class="row px-0 rounded-bottom border border-3 border-dark"
      style="height: 20vw; overflow: auto"
    >
      <div class="list-group col p-0" style="background-color:white">
        <button
          type="button"
          class="list-group-item list-group-item-action"
          v-for="(cocktail, idx) in cocktails"
          :key="idx"
          @click="
            $router.push({
              name: 'CocktailDetails',
              params: { cocktailId: cocktail.idDrink },
            })
          "
        >
          <span class="fs-4">
            {{ cocktail.strDrink }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CocktailShow",
  props: {
    cocktails: Array,
    title: String
  }
};
</script>
