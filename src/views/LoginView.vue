<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import type { User } from '@/types/models/user.type'

const { login } = useUserStore()
const username = ref('')
const password = ref('')

const handleSubmit = () => {
  const tempUser: User = {
    fullName: 'Gökhan Göksel',
    email: 'gciplak@eskisehir.edu.tr',
    userType: 'admin'
  }

  login(tempUser)
  
}

useUserStore
</script>

<template>
  <div class="login-page">
    <div class="login-form">
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-control">
          <label for="email">Email</label>
          <input id="email" type="text" v-model="username" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  width: 400px;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.login-form h1 {
  margin-bottom: 1rem;
}

.form-control {
  margin-bottom: 1rem;
}

.form-control label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-control input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #000;
}

</style>
