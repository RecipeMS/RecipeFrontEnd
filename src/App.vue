<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
        <img
          alt="RecipeBox logo"
          class="header-logo"
          src="@/assets/logo.png"
          width="50"
          height="50"
        />
      </RouterLink>
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/recipes" class="nav-link">Recipes</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>

      <RouterLink to="/logout" class="nav-link">Logout</RouterLink>
      <RouterLink to="/login" class="nav-link nav-right">Login</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 1rem;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-link {
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.nav-link:hover {
  color: #000;
}

.nav-right {
  margin-left: auto;
}
</style>
