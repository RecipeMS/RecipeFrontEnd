import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Recipe } from '@/types/recipe.type'
import { type Filter } from '@/types/filter.type'
import RecipeAPI from '@/api/recipes.api'

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([])

  const test = ref(1)

  const filter = ref<Filter>({
    category: null,
    tag: null,
    name: null
  })

  const loadRecipes = async () => {
    const response = await RecipeAPI.getRecipes()
    recipes.value = response
  }

  const addRecipe = (newRecipe: Recipe) => {
    console.log(newRecipe)
    RecipeAPI.createRecipe(newRecipe)
  }

  const deleteRecipe = (id: number) => {
    recipes.value = recipes.value.filter((recipe) => recipe.id !== id)
    RecipeAPI.deleteRecipe(id)
  }

  const getRecipeById = (id: number) => {
    return recipes.value.find((recipe) => recipe.id === id)
  }

  const filteredRecipes = computed(() => {
    return recipes.value?.filter((recipe) => {
      const categoryFilter = filter.value.category
        ? recipe.categories.includes(filter.value.category)
        : true
      const tagFilter = filter.value.tag ? recipe.tags.includes(filter.value.tag) : true
      const nameFilter = filter.value.name
        ? recipe.name.toLowerCase().includes(filter.value.name.toLowerCase())
        : true

      return categoryFilter && tagFilter && nameFilter
    })
  })

  return {
    recipes,
    filter,
    addRecipe,
    deleteRecipe,
    loadRecipes,
    getRecipeById,
    filteredRecipes,
    test
  }
})
