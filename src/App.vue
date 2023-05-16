<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import { useRecipeStore } from './stores/recipe.store'
import { useUserStore } from './stores/user.store'

const { loadRecipes } = useRecipeStore()

onMounted(async () => {

  const savedUser = localStorage.getItem('user')

  if (savedUser) {
    const user = JSON.parse(savedUser)
    useUserStore().login(user)
  }

  await loadRecipes()
})
</script>

<template>
  <NavigationBar />
  <RouterView />
</template>

<style scoped></style>
