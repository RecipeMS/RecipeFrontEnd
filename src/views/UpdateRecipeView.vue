<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useRecipeStore } from '@/stores/recipe.store'
import type { Recipe } from '@/types/recipe.type'
import type { Ingredient } from '@/types/ingredient.type'
import { Category } from '@/enums/category.enum'
import { Tag } from '@/enums/tag.enum'
import IngredientFormField from '@/components/IngredientFormField.vue'

const { updateRecipe, getRecipeById } = useRecipeStore()

const router = useRouter()
const route = useRoute()
const paramId = Number(route.params.id)

const currentRecipe = computed(() => {
  return getRecipeById(paramId)
})

const name = ref(currentRecipe.value?.name)
const description = ref(currentRecipe.value?.description)
const size = ref(currentRecipe.value?.size)
const categories = ref<Category[]>([])
const tags = ref<Tag[]>([])
const ingredients = ref(currentRecipe.value?.ingredients || [])

const currentNumberOfIngredients = ref(currentRecipe.value?.ingredients.length || 1)

const categoryOptions = Object.values(Category)
const tagOptions = Object.values(Tag)

const editRecipe = async () => {
  const recipe: Recipe = {
    id: paramId,
    name: name.value || '',
    description: description.value || '',
    size: size.value || 1,
    categories: categories.value,
    tags: tags.value,
    ingredients: ingredients.value
  }

  await updateRecipe(paramId, recipe)
  router.push('/recipes')
}

const addIngredient = (ingredient: Ingredient) => {
  ingredients.value.push(ingredient)
}

const handleDeleteIngredient = (tempId: number) => {
  const index = ingredients.value.findIndex((ingredient) => ingredient.id === tempId)

  if (index !== -1) {
    ingredients.value.splice(index, 1)
  }
}
</script>

<template>
  <div class="update-recipe-page">
    <div class="update-recipe-form">
      <h1>Update</h1>
      <form @submit.prevent="editRecipe">
        <div class="form-control">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea id="description" v-model="description"></textarea>
        </div>
        <div class="form-control">
          <label for="size">Size</label>
          <input type="number" id="size" v-model="size" />
        </div>
        <div class="form-control">
          <label for="categories">Categories</label>
          <select id="categories" v-model="categories" multiple>
            <option v-for="category in categoryOptions" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
        <div class="form-control">
          <label for="tags">Tags</label>
          <select id="tags" v-model="tags" multiple>
            <option v-for="tag in tagOptions" :key="tag" :value="tag">{{ tag }}</option>
          </select>
        </div>
        <div class="form-control">
          <label for="ingredients">Ingredients</label>
          <IngredientFormField
            v-for="index in currentNumberOfIngredients"
            :key="index"
            :addIngredient="addIngredient"
            :tempId="index"
            :ingredient="ingredients[index - 1]"
            @deleteIngredient="handleDeleteIngredient"
          />
        </div>
        <div class="form-control">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.update-recipe-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
}

.update-recipe-page h1 {
  margin-bottom: 1rem;
  text-align: center;
  font-size: 2rem;
}

.update-recipe-form {
  max-width: 900px;
  padding: 2rem;
  border: 1px solid #ddd;
}

.update-recipe-form form {
  display: flex;
  flex-direction: column;
}

.update-recipe-form form .form-control {
  margin-bottom: 1rem;
}

.update-recipe-form form .form-control label {
  display: block;
  margin-bottom: 0.5rem;
}

.update-recipe-form form .form-control input,
.update-recipe-form form .form-control textarea,
.update-recipe-form form .form-control select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.update-recipe-form form .form-control select {
  height: 100px;
}

.update-recipe-form form .form-control button {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
}

.update-recipe-form form .form-control button:hover {
  background-color: #ddd;
}

.update-recipe-form form .form-control button:active {
  background-color: #ccc;
}

.update-recipe-form form .form-control button:focus {
  outline: none;
}

.update-recipe-btn {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
}

.update-recipe-btn:hover {
  background-color: #d6d6d6;
}

.form-control {
  border: none;
}
</style>
