import axios from 'axios'
import { type Recipe } from '@/types/recipe.type'
import { Api } from '@/enums/api.enum'

const url = Api.RECIPES

export const getRecipes = async () => {
  const response = await axios.get(url)
  return response.data
}

export const getRecipeById = async (id: string) => {
  const response = await axios.get(`${url}${id}`)
  return response.data
}

export const getRecipesByCategory = async (category: string) => {
  const response = await axios.get(`${url}?category=${category}`)
  return response.data
}

export const getRecipesByTag = async (tag: string) => {
  const response = await axios.get(`${url}?tag=${tag}`)
  return response.data
}

export const createRecipe = async (newRecipe: Recipe) => {
  const response = await axios.post(url, newRecipe)
  return response.data
}

export const updateRecipe = async (id: string, updatedRecipe: Recipe) => {
  const response = await axios.patch(`${url}${id}`, updatedRecipe)
  return response.data
}

export const deleteRecipe = async (id: string) => {
  await axios.delete(`${url}${id}`)
}
