<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user.store'
import type { User } from '@/types/models/user.type'
import { useRouter } from 'vue-router'

const router = useRouter()

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

  // navigate to home page
  router.push('/')
}

useUserStore
</script>

<template>
  
  <div class="login-page arkaplan">
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
.arkaplan{
  background-image: url('@/assets/images/loginback.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: 'Helvetica Neue', sans-serif;
}
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 40px;
  text-align: center;
  width: 400px;
}

.login-form h2 {
  color: #333;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}

.form-control {
  margin-bottom: 20px;
  text-align: left;
}

.form-control label {
  color: #333;
  display: block;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
}

.form-control input {
  border: none;
  border-bottom: 2px solid #712c2c;
  color: #333;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  transition: border-color 0.3s ease-in-out;
}

.form-control input:focus {
  border-color: rgb(237, 100, 32);
  outline: none;
}

button[type="submit"] {
  background-color: rgb(237, 100, 32);
  border: none;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 36px;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out;
}

button[type="submit"]:hover {
  background-color: rgb(237, 100, 32);
}
</style>
