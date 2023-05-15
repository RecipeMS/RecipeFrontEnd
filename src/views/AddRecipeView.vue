<script setup lang="ts">
import { ref, computed, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useRecipeStore } from '@/stores/recipe.store'
import type { Recipe } from '@/types/recipe.type'

const { addRecipe } = useRecipeStore()

const route = useRoute()
const router = useRouter()

const name = ref('')
const description = ref('')
const size = ref(0)
const categories = ref([])
const tags = ref([])
const ingredients = ref([])

const createRecipe = () => {
  const recipe: Recipe = {
    id: 0,
    name: name.value,
    description: description.value,
    size: size.value,
    categories: categories.value,
    tags: tags.value,
    ingredients: ingredients.value,
  }

  addRecipe(recipe)
  router.push('/recipes')
}

</script>

<template>
  <div class="add-recipe-page">
    <div class="add-recipe">
      <h1>Add Recipe</h1>
      <form @submit.prevent="createRecipe">
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
          <input type="text" id="categories" v-model="categories" />
        </div>
        <div class="form-control">
          <label for="tags">Tags</label>
          <input type="text" id="tags" v-model="tags" />
        </div>
        
        <div class="multiple-ingredients">
          <!-- TODO -->
        </div>

        <button type="submit">Add Recipe</button>
      </form>
    </div>

  </div>
</template>

<style scoped>
</style>
