import axios from "axios";

const CocktailAPI = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  async getRandomCocktail() {
    const response = await CocktailAPI.get("/random.php");
    return response.data.drinks[0];
  },
};
