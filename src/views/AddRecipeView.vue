<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRecipeStore } from '@/stores/recipe.store'
import type { Recipe } from '@/types/recipe.type'
import IngredientFormField from '@/components/IngredientFormField.vue'
import type { Ingredient } from '@/types/ingredient.type'
import { Category } from '@/enums/category.enum'
import { Tag } from '@/enums/tag.enum'

const { addRecipe, loadRecipes } = useRecipeStore()

const router = useRouter()

const name = ref('')
const description = ref('')
const size = ref(1)
// min 1, max 3 categories
const categories = ref<Category[]>([])
// min 1, max 3 tags
const tags = ref<Tag[]>([])
const ingredients = ref<Ingredient[]>([])
const currentNumberOfIngredients = ref(1)

const categoryOptions = Object.values(Category)
const tagOptions = Object.values(Tag)

const createRecipe = () => {
  const recipe: Recipe = {
    name: name.value,
    description: description.value,
    size: size.value,
    categories: categories.value,
    tags: tags.value,
    ingredients: ingredients.value
  }

  console.log(recipe)

  addRecipe(recipe)
  loadRecipes()
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
  <div class="add-recipe-page">
    <div class="add-recipe-form">
      <h1>Add Recipe</h1>
      <form @submit.prevent="createRecipe">
        <div class="form-control">
          <label for="name">Name</label>
          <input id="name" type="text" v-model="name" required />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea id="description" v-model="description" required></textarea>
        </div>
        <div class="form-control">
          <label for="size">Size</label>
          <input id="size" type="number" v-model="size" required min="1" />
        </div>
        <div class="form-control">
          <label for="categories">Categories</label>
          <select id="categories" multiple v-model="categories" required>
            <option v-for="option in categoryOptions" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div class="form-control">
          <label for="tags">Tags</label>
          <select id="tags" multiple v-model="tags" required>
            <option v-for="option in tagOptions" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div class="form-control">
          <label for="ingredients">Ingredients</label>
          <div id="ingredients">
            <IngredientFormField
              v-for="index in currentNumberOfIngredients"
              :key="index"
              :addIngredient="addIngredient"
              :tempId="index"
              @deleteIngredient="handleDeleteIngredient"
            />

            <button type="button" @click="currentNumberOfIngredients++">Add Ingredient</button>
          </div>
        </div>
        <button type="submit" class="create-recipe-btn">Create Recipe</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.add-recipe-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
}

.add-recipe-page h1 {
  margin-bottom: 1rem;
  text-align: center;
  font-size: 2rem;
}

.add-recipe-form {
  max-width: 900px;
  padding: 2rem;
  border: 1px solid #ddd;
}

.add-recipe-form form {
  display: flex;
  flex-direction: column;
}

.add-recipe-form form .form-control {
  margin-bottom: 1rem;
}

.add-recipe-form form .form-control label {
  display: block;
  margin-bottom: 0.5rem;
}

.add-recipe-form form .form-control input,
.add-recipe-form form .form-control textarea,
.add-recipe-form form .form-control select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.add-recipe-form form .form-control select {
  height: 100px;
}

.add-recipe-form form .form-control button {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
}

.add-recipe-form form .form-control button:hover {
  background-color: #ddd;
}

.add-recipe-form form .form-control button:active {
  background-color: #ccc;
}

.add-recipe-form form .form-control button:focus {
  outline: none;
}

.create-recipe-btn {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
}

.create-recipe-btn:hover {
  background-color: #d6d6d6;
}

.form-control {
  border: none;
}
</style>
