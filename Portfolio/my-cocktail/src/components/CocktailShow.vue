<template>
  <div class="card border border-3 border-dark" style="width: 18rem; background-color: black;">
    <img :src="cocktail.strDrinkThumb" class="card-img-top border-bottom border-3 border-dark" :alt="cocktail.strDrink" style="background-color:black" />
    <div class="card-body d-flex justify-content-center align-items-center" style="height:4rem">
      <span class="card-title h5 my-0">{{cocktail.strDrink}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CocktailShow",
  props: {
    cocktail: Object,
  },
};
</script>

<style>

.card-body{
  background: linear-gradient( 45deg, hsla(76, 73%, 71%, 1), hsla(41, 81%, 60%, 1) );
}

.card-title {
  font-weight: bold
}

.card:hover{
  box-shadow: 0 0 5px 10px hsla(0, 1%, 44%, 0.5);
  cursor: pointer;
}

</style>