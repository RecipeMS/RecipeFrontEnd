<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import { useRecipeStore } from './stores/recipe.store'

const { loadRecipes } = useRecipeStore()

onMounted(async () => {
  await loadRecipes()
})
</script>

<template>
  <NavigationBar />
  <RouterView />
</template>

<style scoped></style>
