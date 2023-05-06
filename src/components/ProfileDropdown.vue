<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/user'

const userStore = useUserStore()

const dropdownOpen = ref(false)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const closeDropdown = () => {
  dropdownOpen.value = false
}

const handleLogout = () => {
  userStore.logout()
  closeDropdown()
}
</script>

<template>
  <div class="dropdown">
    <button class="drop-btn" @click="toggleDropdown()">
      <img alt="Profile" class="profile-image" src="@/assets/profile.png" width="50" height="50" />
    </button>
    <div class="dropdown-content" v-show="dropdownOpen">
      <RouterLink to="/profile" class="drop-item" @click="closeDropdown()">Profile</RouterLink>
      <button @click="handleLogout()" class="drop-item">Logout</button>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.drop-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}

.profile-image {
  border-radius: 50%;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f5f5f5;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.dropdown-content .drop-item {
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content .drop-item:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
