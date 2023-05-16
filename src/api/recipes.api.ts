import axios from 'axios'
import { type Recipe } from '@/types/recipe.type'
import { Api } from '@/enums/api.enum'

const url = Api.RECIPES

class RecipeAPI {
  public static async getRecipes() {
    const response = await axios.get(url)
    return response.data
  }

  public static async getRecipeById(id: number) {
    const response = await axios.get(`${url}/${id}`)
    return response.data
  }

  public static async createRecipe(newRecipe: Recipe) {
    const response = await axios.post(url, newRecipe)
    return response.data
  }

  public static async updateRecipe(id: number, updatedRecipe: Recipe) {
    const response = await axios.patch(`${url}/${id}`, updatedRecipe)
    return response.data
  }

  public static async deleteRecipe(id: number) {
    await axios.delete(`${url}/${id}`)
  }
}

export default RecipeAPI
