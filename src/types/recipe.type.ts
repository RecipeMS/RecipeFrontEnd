import { Category } from '../enums/category.enum'
import { Tag } from '../enums/tag.enum'
import type { Ingredient } from './ingredient.type'
import type { User } from './user.type'

export type Recipe = {
  id: number
  name: string
  description: string
  size: number
  categories: Category[]
  tags: Tag[]
  ingredients: Ingredient[]
}
