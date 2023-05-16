import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileViewVue from '@/views/ProfileView.vue'
import RecipeListView from '@/views/RecipeListView.vue'
import RecipeDetailsView from '@/views/RecipeDetailsView.vue'
import AddRecipeView from '@/views/AddRecipeView.vue'
import UpdateRecipeViewVue from '@/views/UpdateRecipeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileViewVue
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: RecipeListView
    },
    {
      path: '/recipes/:id',
      name: 'recipe-details',
      component: RecipeDetailsView
    },
    {
      path: '/add-recipe',
      name: 'add-recipe',
      component: AddRecipeView
    },
    {
      path: '/update-recipe/:id',
      name: 'update-recipe',
      component: UpdateRecipeViewVue
    }
  ]
})

export default router
