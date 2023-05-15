import { Unit } from '../enums/unit.enum'

export type Ingredient = {
  id: number
  name: string
  amount: number
  unit: Unit
}
