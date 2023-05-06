import type { Category } from '@/enums/category.enum'
import type { Tag } from '@/enums/tag.enum'

export type Filter = {
  category: Category | '' | null
  tag: Tag | '' | null
  name: string | null
}
