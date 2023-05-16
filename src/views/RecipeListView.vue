<script lang="ts" setup>
import { ref, computed, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useRecipeStore } from '@/stores/recipe.store'
import { useUserStore } from '@/stores/user.store'
import { Category } from '@/enums/category.enum'
import { Tag } from '@/enums/tag.enum'

const recipeStore = useRecipeStore()
const userStore = useUserStore()
const { user } = userStore
const userType = user?.userType
const { deleteRecipe } = recipeStore
const { filteredRecipes, filter } = toRefs(recipeStore)
const router = useRouter()

const name = ref('')
const category = ref<Category | ''>('')
const tag = ref<Tag | ''>('')

const categoryOptions = computed(() => {
  return Object.values(Category)
})

const tagOptions = computed(() => {
  return Object.values(Tag)
})

const handleFilter = () => {
  filter.value = {
    name: name.value,
    category: category.value,
    tag: tag.value
  }
}

const handleRecipeClick = (id: number) => {
  router.push(`/recipes/${id}`)
}

const handleUpdateRecipeClick = (id: number) => {
  router.push(`/update-recipe/${id}`)
}

const handleDeleteRecipe = async (id: number) => {
  await deleteRecipe(id)
}
</script>

<template>
  <div class="recipes-page row">
    <div class="filters">
      <div
        class="filter align-items-center"
        style="border-bottom-left-radius: 10px; border-top-right-radius: 10px"
      >
        <h3>Find Fast</h3>
      </div>

      <div class="filter align-items-center">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model="name"
          @input="handleFilter"
          placeholder="Search by name"
        />
      </div>

      <div class="filter align-items-center">
        <label for="category">Category</label>
        <select
          id="category"
          v-model="category"
          @change="handleFilter"
          placeholder="Search by category"
        >
          <option value="">All</option>
          <option v-for="option in categoryOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>

      <div class="filter align-items-center">
        <label for="tag">Tag</label>
        <select id="tag" v-model="tag" @change="handleFilter" placeholder="Search by tag">
          <option value="">All</option>
          <option v-for="option in tagOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
    </div>
    <div style="margin-left: 320px">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="recipe in filteredRecipes" :key="recipe.id">
            <td class="name cursor" @click="handleRecipeClick(recipe.id!)">{{ recipe.name }}</td>
            <td>
              <p class="description cursor">
                {{ recipe.description }}
              </p>
            </td>
            <td>
              <button class="btn btn-primary" @click="handleUpdateRecipeClick(recipe.id!)" v-if="user">
                Update
              </button>
            </td>
            <td>
              <button
                class="btn btn-danger"
                @click="handleDeleteRecipe(recipe.id!)"
                v-if="userType === 'admin'"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <button
        @click="() => router.push('/add-recipe')"
        class="btn btn-primary add-recipe-btn"
        v-if="user"
      >
        Add new recipe
      </button>
    </div>
    <div class="animationpossition">
      <div id="cooking">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div id="area">
          <div id="sides">
            <div id="pan"></div>
            <div id="handle"></div>
          </div>
          <div id="pancake">
            <div id="pastry"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.add-recipe-btn {
  margin: 20px;
}

.recipes-page .filters {
  padding-top: 60px;
  justify-content: space-between;
  background-color: #ffc793;
  width: 300px;
  height: 400px;
  border-radius: 15px;
  position: fixed;
}

.recipes-page .filter {
  display: flex;
  flex-direction: column;
}

.recipes-page .filter label {
  margin-bottom: 0.5rem;
}

.recipes-page .filter input,
.recipes-page .filter select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}

.recipes-page {
  margin: 33px;
  max-width: 800px;
}

.recipes-page table {
  width: 100%;
  border-collapse: collapse;
}

.recipes-page table thead tr th {
  text-align: left;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
}

.recipes-page table tbody tr td {
  padding: 0.5rem;
}

.recipes-page table tbody tr:nth-child(odd) {
  background: #f5f5f5;
}

.name {
  cursor: pointer;
  background-color: #fff;
}

.recipes-page table tbody tr:hover {
  background: #ffc793 !important;
}

.recipes-page table tbody tr td .description {
  max-width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.recipes-page table tbody tr td a {
  color: #000;
  text-decoration: none;
}
@import url('https://fonts.googleapis.com/css?family=Amatic+SC');
body {
  background-color: #ffde6b;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

h1 {
  position: relative;
  margin: 0 auto;
  top: 25vh;
  width: 100vw;
  text-align: center;
  font-family: 'Amatic SC';
  font-size: 6vh;
  color: #333;
  opacity: 0.75;
  animation: pulse 2.5s linear infinite;
}

#cooking {
  position: relative;
  margin: 0 auto;
  top: 0;
  width: 70vh;
  height: 70vh;
  overflow: hidden;
}
#cooking .bubble {
  position: absolute;
  border-radius: 100%;
  box-shadow: 0 0 0.25vh #4d4d4d;
  opacity: 0;
}
#cooking .bubble:nth-child(1) {
  margin-top: 2.5vh;
  left: 58%;
  width: 2.5vh;
  height: 2.5vh;
  background-color: #454545;
  animation: bubble 2s cubic-bezier(0.53, 0.16, 0.39, 0.96) infinite;
}
#cooking .bubble:nth-child(2) {
  margin-top: 3vh;
  left: 52%;
  width: 2vh;
  height: 2vh;
  background-color: #3d3d3d;
  animation: bubble 2s ease-in-out 0.35s infinite;
}
#cooking .bubble:nth-child(3) {
  margin-top: 1.8vh;
  left: 50%;
  width: 1.5vh;
  height: 1.5vh;
  background-color: #333;
  animation: bubble 1.5s cubic-bezier(0.53, 0.16, 0.39, 0.96) 0.55s infinite;
}
#cooking .bubble:nth-child(4) {
  margin-top: 2.7vh;
  left: 56%;
  width: 1.2vh;
  height: 1.2vh;
  background-color: #2b2b2b;
  animation: bubble 1.8s cubic-bezier(0.53, 0.16, 0.39, 0.96) 0.9s infinite;
}
#cooking .bubble:nth-child(5) {
  margin-top: 2.7vh;
  left: 63%;
  width: 1.1vh;
  height: 1.1vh;
  background-color: #242424;
  animation: bubble 1.6s ease-in-out 1s infinite;
}
#cooking #area {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
  background-color: transparent;
  transform-origin: 15% 60%;
  animation: flip 2.1s ease-in-out infinite;
}
#cooking #area #sides {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: 15% 60%;
  animation: switchSide 2.1s ease-in-out infinite;
}
#cooking #area #sides #handle {
  position: absolute;
  bottom: 18%;
  right: 80%;
  width: 35%;
  height: 20%;
  background-color: transparent;
  border-top: 1vh solid #333;
  border-left: 1vh solid transparent;
  border-radius: 100%;
  transform: rotate(20deg) rotateX(0deg) scale(1.3, 0.9);
}
#cooking #area #sides #pan {
  position: absolute;
  bottom: 20%;
  right: 30%;
  width: 50%;
  height: 8%;
  background-color: #333;
  border-radius: 0 0 1.4em 1.4em;
  transform-origin: -15% 0;
}
#cooking #area #pancake {
  position: absolute;
  top: 24%;
  width: 100%;
  height: 100%;
  transform: rotateX(85deg);
  animation: jump 2.1s ease-in-out infinite;
}
#cooking #area #pancake #pastry {
  position: absolute;
  bottom: 26%;
  right: 37%;
  width: 40%;
  height: 45%;
  background-color: #333;
  box-shadow: 0 0 3px 0 #333;
  border-radius: 100%;
  transform-origin: -20% 0;
  animation: fly 2.1s ease-in-out infinite;
}

@keyframes jump {
  0% {
    top: 24%;
    transform: rotateX(85deg);
  }
  25% {
    top: 10%;
    transform: rotateX(0deg);
  }
  50% {
    top: 30%;
    transform: rotateX(85deg);
  }
  75% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(85deg);
  }
}
@keyframes flip {
  0% {
    transform: rotate(0deg);
  }
  5% {
    transform: rotate(-27deg);
  }
  30%,
  50% {
    transform: rotate(0deg);
  }
  55% {
    transform: rotate(27deg);
  }
  83.3% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes switchSide {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
@keyframes fly {
  0% {
    bottom: 26%;
    transform: rotate(0deg);
  }
  10% {
    bottom: 40%;
  }
  50% {
    bottom: 26%;
    transform: rotate(-190deg);
  }
  80% {
    bottom: 40%;
  }
  100% {
    bottom: 26%;
    transform: rotate(0deg);
  }
}
@keyframes bubble {
  0% {
    transform: scale(0.15, 0.15);
    top: 80%;
    opacity: 0;
  }
  50% {
    transform: scale(1.1, 1.1);
    opacity: 1;
  }
  100% {
    transform: scale(0.33, 0.33);
    top: 60%;
    opacity: 0;
  }
}
@keyframes pulse {
  0% {
    transform: scale(1, 1);
    opacity: 0.25;
  }
  50% {
    transform: scale(1.2, 1);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0.25;
  }
}
.animationpossition {
  margin-left: 800px;
  width: 100px;
  height: 100px;
  position: fixed;
  z-index: -100;
}
</style>
