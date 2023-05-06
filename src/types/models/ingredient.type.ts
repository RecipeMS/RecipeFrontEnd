import { Unit } from '../../enums/unit.enum'

export type Ingredient = {
  id: string
  name: string
  quantity: number
  unit: Unit
}
