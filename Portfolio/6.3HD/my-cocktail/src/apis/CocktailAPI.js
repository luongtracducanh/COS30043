import axios from "axios";

const CocktailAPI = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
  headers: {
    "Content-type": "application/json",
  },
});

export default {
  async getRandomCocktail() {
    const response = await CocktailAPI.get("/random.php");
    return response.data.drinks[0];
  },
  async getCocktailByName(name) {
    const response = await CocktailAPI.get(`/search.php?s=${name}`);
    return response.data.drinks;
  },
  async getCocktailById(id) {
    const response = await CocktailAPI.get(`/lookup.php?i=${id}`);
    return response.data.drinks[0];
  },
  async getCocktailByIngredient(ingredient) {
    const response = await CocktailAPI.get(`/filter.php?i=${ingredient}`);
    return response.data.drinks;
  },
  async getCocktailByCategory(category) {
    const response = await CocktailAPI.get(`/filter.php?c=${category}`);
    return response.data.drinks;
  },
  async getCocktailByType(type) {
    const response = await CocktailAPI.get(`/filter.php?a=${type}`);
    return response.data.drinks;
  },
  async getAllCategories() {
    const response = await CocktailAPI.get("/list.php?c=list");
    return response.data.drinks;
  },
  async getAllIngredients() {
    const response = await CocktailAPI.get("/list.php?i=list");
    return response.data.drinks;
  },
  async getAlcoholicFilters() {
    const response = await CocktailAPI.get("/list.php?a=list");
    return response.data.drinks;
  },
  async getIngredientByName(name) {
    const response = await CocktailAPI.get(`/search.php?i=${name}`);
    return response.data.ingredients[0];
  },
  async getAllGlasses() {
    const response = await CocktailAPI.get("/list.php?g=list");
    return response.data.drinks;
  },
};
