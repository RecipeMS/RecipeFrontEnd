import { Unit } from '../enums/unit.enum'

export type Ingredient = {
  id: number
  name: string
  quantity: number
  unit: Unit
}
