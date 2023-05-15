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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recipe-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recipe-details h1 {
  margin-bottom: 1rem;
}

.recipe-details p {
  margin: 0.5rem 0;
}

.recipe-details strong {
  margin-right: 0.5rem;
}

.ingredients {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ingredient {
  margin: 0.5rem 0;
}
</style>
