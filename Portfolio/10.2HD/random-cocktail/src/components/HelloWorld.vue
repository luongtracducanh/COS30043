<template>
  <div class="table-responsive">
    <table
      style="width: 50%; margin: auto"
      class="table table-bordered table-hover table-sm"
    >
      <thead>
        <th colspan="2">
          <h1>Cocktail Information</h1>
        </th>
      </thead>
      <tbody>
        <tr>
          <td rowspan="9" style="width: 300px">
            <img
              style="width: 300px; height: 300px"
              :src="cocktail.strDrinkThumb"
            />
          </td>
        </tr>
        <tr>
          <th>Name</th>
        </tr>
        <tr>
          <td>{{ cocktail.strDrink }}</td>
        </tr>
        <tr>
          <th>Category</th>
        </tr>
        <tr>
          <td>{{ cocktail.strCategory }}</td>
        </tr>
        <tr>
          <th>Alcoholic</th>
        </tr>
        <tr>
          <td>
            {{
              cocktail.strAlcoholic === "Alcoholic"
                ? "Yes"
                : cocktail.strAlcoholic === "Non alcoholic"
                ? "No"
                : "Optional"
            }}
          </td>
        </tr>
        <tr>
          <th>Glass</th>
        </tr>
        <tr>
          <td>{{ cocktail.strGlass }}</td>
        </tr>
        <tr>
          <th colspan="2">Instructions</th>
        </tr>
        <tr>
          <td colspan="2">
            {{
              cocktail.strInstructions === ""
                ? "No instruction available for this cocktail."
                : cocktail.strInstructions
            }}
          </td>
        </tr>
        <tr>
          <th colspan="2">Ingredients</th>
        </tr>
        <tr v-for="(ingredient, index) in ingredients" :key="index">
          <td colspan="2">{{ measures[index] }} {{ ingredient }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CocktailAPI from "@/apis/CocktailAPI";

export default {
  name: "HelloWorld",
  data() {
    return {
      cocktail: {},
      ingredients: [],
      measures: [],
      ingredientCount: 15,
    };
  },
  mounted() {
    CocktailAPI.getRandomCocktail()
      .then((cocktail) => {
        this.cocktail = cocktail;
        for (let i = 1; i <= this.ingredientCount; i++) {
          const ingredient = cocktail[`strIngredient${i}`];
          const measure = cocktail[`strMeasure${i}`];
          if (ingredient !== null) this.ingredients.push(ingredient);
          if (measure !== null) this.measures.push(measure);
        }
      })
      .catch((err) => console.log(err));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
