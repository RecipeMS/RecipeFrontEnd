<script lang="ts" setup>
import { ref, computed, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useRecipeStore } from '@/stores/recipe.store'
import { Category } from '@/enums/category.enum'
import { Tag } from '@/enums/tag.enum'

const recipeStore = useRecipeStore()
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
</script>

<template>
  <div class="recipes-page">
    <div class="filters">
      <div class="filter">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model="name"
          @input="handleFilter"
          placeholder="Search by name"
        />
      </div>

      <div class="filter">
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

      <div class="filter">
        <label for="tag">Tag</label>
        <select id="tag" v-model="tag" @change="handleFilter" placeholder="Search by tag">
          <option value="">All</option>
          <option v-for="option in tagOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="recipe in filteredRecipes"
          :key="recipe.id"
          @click="handleRecipeClick(recipe.id)"
        >
          <td class="name">{{ recipe.name }}</td>
          <td>
            <p class="description">{{ recipe.description }}</p>
          </td>
          <td>
            <a> Edit </a>
          </td>
          <td>
            <button @click="deleteRecipe(recipe.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.recipes-page .filters {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.recipes-page .filter {
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
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
  margin: 0 auto;
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

.recipes-page table tbody tr {
  cursor: pointer;
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

.recipes-page table tbody tr td button {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
}

.recipes-page table tbody tr td button:hover {
  background: #ff3b3b;
  color: #fff;
}
</style>
