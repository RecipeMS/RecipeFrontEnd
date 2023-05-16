import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type User } from '@/types/user.type'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)

  const login = (newUser: User) => {
    console.log(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
    user.value = newUser
  }

  const logout = () => {
    localStorage.removeItem('user')
    user.value = null
  }

  const isLoggedIn = computed(() => user.value !== null)

  return {
    user,
    login,
    logout,
    isLoggedIn
  }
})
