<script setup lang="ts">
import { ref, computed, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useRecipeStore } from '@/stores/recipe.store'

const { getRecipeById } = useRecipeStore()

const route = useRoute()
const router = useRouter()
const id = ref(Number(route.params.id))

const recipe = computed(() => {
  return getRecipeById(id.value)
})

// if the recipe is not found, redirect to the recipes page
if (!recipe.value) {
  router.push('/recipes')
}
</script>

<template>
  <div class="recipe-details-page">
    <div class="recipe-details" v-if="recipe">
      <h1>{{ recipe.name }}</h1>
      <p>{{ recipe.description }}</p>
      <!-- for size people / person-->
      <p>
        <strong>size:</strong> for {{ recipe.size }} {{ recipe.size === 1 ? 'person' : 'people' }}
      </p>
      <p><strong>Categories:</strong> {{ recipe.categories.join(', ') }}</p>
      <p><strong>Tags:</strong> {{ recipe.tags.join(', ') }}</p>
      <p><strong>Ingredients:</strong></p>
      <ul class="ingredients">
        <li v-for="ingredient in recipe.ingredients" :key="ingredient.id" class="ingredient">
          {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.recipe-details-page {
  background-color: #fff4e6;
  display: flex;
  justify-content: center;
  align-items: center;
}

.recipe-details {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  padding: 40px;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
}

.recipe-details h1 {
  color: #ff6e4a;
  font-size: 60px;
  font-weight: 800;
  margin-bottom: 20px;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}

.recipe-details p {
  color: #777;
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 10px;
}

.recipe-details strong {
  color: #ff6e4a;
  font-weight: 700;
}

.ingredients {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
}

.ingredient {
  color: #777;
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 10px;
}

.ingredient::before {
  content: '\2022';
  color: #ff6e4a;
  font-size: 18px;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
</style>
