import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
  withCredentials: false,
  headers: {
    Accept: "application/json"
  }
})

export default {
  async getRandom () {
    const response = await apiClient.get("/random.php")
    return response.data.drinks[0]
  },
  async getCategories () {
    const response = await apiClient.get("/list.php?c=list")
    return response.data.drinks
  },
  async getCocktailById (cocktailId) {
    const response = await apiClient.get(`/lookup.php?i=${cocktailId}`)
    return response.data.drinks[0]
  },
  async getCocktailsByName (name) {
    const response = await apiClient.get(`/search.php?s=${name}`)
    return response.data.drinks
  },
  async getCocktailsByIngredient (ingredientName) {
    const response = await apiClient.get(`/filter.php?i=${ingredientName}`)
    return response.data.drinks
  },
  async getCocktailsByCategory (category) {
    const response = await apiClient.get(`/filter.php?c=${category}`)
    return response.data.drinks
  },
  async getCocktailsByType (type) {
    const response = await apiClient.get(`/filter.php?a=${type}`)
    return response.data.drinks
  },
  async getAllIngredients () {
    const response = await apiClient.get("/list.php?i=list")
    return response.data.drinks
  },
  async getTypes () {
    const response = await apiClient.get("/list.php?a=list")
    return response.data.drinks
  },

  async getIngredientById (ingredientId) {
    console.log(ingredientId)
    const response = await apiClient.get(`/search.php?i=${ingredientId}`)
    return response.data.ingredients[0]
  }
}
