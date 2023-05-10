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
.profile-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.profile-info p {
  margin: 0.5rem 0;
}

.profile-info strong {
  margin-right: 0.5rem;
}
</style>
