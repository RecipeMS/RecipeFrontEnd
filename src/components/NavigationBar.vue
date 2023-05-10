<script lang="ts" setup>
import ProfileDropdown from './ProfileDropdown.vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/user.store'

const userStore = useUserStore()
</script>

<template>
  <header>
    <nav>
      <div class="row">
        <div class="col-4 float-left">
          <RouterLink to="/" style="text-decoration: none">
            <div class="logo">
              <h1 style="padding-right: 5px;"> Recipe Box </h1>
              <img alt="Recipe Box logo" class="header-logo" src="@/assets/images/logo.png" width="50" height="50" />
            </div>
          </RouterLink>
        </div>
        <div class="col-4 d-flex align-items-center justify-content-center">
          <RouterLink to="/" class="nav-link ">Home</RouterLink>
          <RouterLink to="/recipes" class="nav-link">Recipes</RouterLink>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
        </div>
        <div class="col-4 d-flex align-items-center justify-content-end">
          <div>
            <ProfileDropdown v-if="userStore.isLoggedIn" />
            <RouterLink v-else to="/login" class="nav-link btn btn-primary ">Login</RouterLink>
          </div>
        </div>
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

  justify-content: space-between;
  align-items: center;
}

.nav-link {
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.nav-link:hover {
  font-size: larger;
  color: #000;
  border: 2px solid rgb(237, 100, 32);
  ;
}

.nav-right {
  margin-left: auto;
}
</style>
