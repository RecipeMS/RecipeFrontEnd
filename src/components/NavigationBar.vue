<script lang="ts" setup>
import ProfileDropdown from './ProfileDropdown.vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/user.store'

const userStore = useUserStore()
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
        <img
          alt="Recipe Box logo"
          class="header-logo"
          src="@/assets/logo.png"
          width="50"
          height="50"
        />
      </RouterLink>
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/recipes" class="nav-link">Recipes</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>

      <div class="nav-right">
        <ProfileDropdown v-if="userStore.isLoggedIn" />
        <RouterLink v-else to="/login" class="nav-link">Login</RouterLink>
      </div>
    </nav>
  </header>
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
