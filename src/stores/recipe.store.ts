import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Recipe } from '@/types/models/recipe.type'
import { Category } from '@/enums/category.enum'
import { Tag } from '@/enums/tag.enum'

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([])

  const addRecipe = (newRecipe: Recipe) => {
    recipes.value.push(newRecipe)
    localStorage.setItem('recipes', JSON.stringify(recipes.value))
  }

  const removeRecipe = (recipe: Recipe) => {
    recipes.value.splice(recipes.value.indexOf(recipe), 1)
    localStorage.setItem('recipes', JSON.stringify(recipes.value))
  }

  const getRecipe = computed((id: number) => recipes.value.find((recipe) => recipe.id === id))

  const getRecipesByCategory = computed((category: Category) =>
    recipes.value.filter((recipe) => recipe.categories.includes(category))
  )

  const getRecipesByTag = computed((tag: Tag) =>
    recipes.value.filter((recipe) => recipe.tags.includes(tag))
  )

  return {
    recipes,
    addRecipe,
    removeRecipe,
    getRecipe,
    getRecipesByCategory,
    getRecipesByTag
  }
})
