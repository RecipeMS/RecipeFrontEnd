<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useUserStore } from '../stores/user.store'

const userStore = useUserStore()
const route = useRouter()

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
  route.push('/login')
}
</script>

<template>
  <div class="dropdown">
    <button class="drop-btn" @click="toggleDropdown()">
      <img alt="Profile" class="profile-image" src="@/assets/images/profile.png" width="50" height="50" />
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
  top: 100%;
  right: 0;
  background-color: #f27e1e;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
}
.dropdown-content button {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #f27e1e;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
