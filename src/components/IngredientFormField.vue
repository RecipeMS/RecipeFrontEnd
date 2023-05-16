<script setup lang="ts">
import { ref } from 'vue'
import { Unit } from '@/enums/unit.enum'

const props = defineProps({
  addIngredient: {
    type: Function,
    required: true
  },
  tempId: {
    type: Number,
    required: true
  },
  ingredient: {
    type: Object,
    required: false
  }
})

const amount = ref(props.ingredient?.amount || 1)
const unit = ref(props.ingredient?.unit || Unit.GRAM)
const name = ref(props.ingredient?.name || '')
const saved = ref(false)

const unitOptions = Object.values(Unit)

const addIngredient = () => {
  props.addIngredient({
    amount: amount.value,
    unit: unit.value,
    name: name.value
  })

  saved.value = true
}
</script>

<template>
  <div class="ingredient-form-field">
    <input type="number" v-model="amount" step="0.1" :disabled="saved" />
    <select v-model="unit" ref="unitField" :disabled="saved">
      <option v-for="option in unitOptions" :key="option" :value="option" :disabled="saved">
        {{ option }}
      </option>
    </select>
    <input type="text" v-model="name" placeholder="Name of ingredient" :disabled="saved" />

    <button
      type="button"
      class="delete-btn"
      :disabled="saved"
      @click="$emit('deleteIngredient', tempId)"
    >
      Delete
    </button>
    <button type="button" class="save-btn" @click="addIngredient" :disabled="saved">Save</button>
  </div>
</template>

<style scoped>
.ingredient-form-field {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.ingredient-form-field input[type='number'] {
  width: 5rem;
}

.ingredient-form-field input[type='text'] {
  width: 15rem;
}

.ingredient-form-field select {
  width: 10rem;
}

.ingredient-form-field input,
.ingredient-form-field select {
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 0.5rem;
}

.ingredient-form-field input:focus,
.ingredient-form-field select:focus {
  outline: none;
  border-color: #000;
}
.save-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
}

.save-btn:hover {
  background-color: #46a049;
}

.save-btn:active {
  background-color: #3e8e41;
}

.save-btn:focus {
  outline: none;
}

.save-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.delete-btn {
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
}
</style>
