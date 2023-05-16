<script setup lang="ts">
import { useUserStore } from '@/stores/user.store'
import type { User } from '@/types/user.type'

const { user } = useUserStore() as { user: User }

const { fullName, email, userType } = user
</script>

<template>
  <div class="profile-page">
    <h1>Profile</h1>
    <div class="profile-info">
      <img alt="Profile picture" class="profile-picture" src="@/assets/images/profile.png" />
      <p><strong>Name:</strong> {{ fullName }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>User Type:</strong> {{ userType }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Genel stil */
.profile-page {
  text-align: center;
  font-family: Arial, sans-serif;
}

/* Profil resmi */
.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/* Profil bilgileri */
.profile-info {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

.profile-info:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

/* Başlık */
h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

/* Etiketler */
p {
  margin-bottom: 10px;
  color: #666;
}

strong {
  font-weight: bold;
}

/* Arka plan */
body {
  background-color: #f9f9f9;
}

/* Kenar boşlukları */
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

</style>
