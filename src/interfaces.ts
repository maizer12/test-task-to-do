export interface ITasks {
  id: number
  title: string
  completed: boolean
}

export type FilterType = 'all' | 'completed' | 'current'

export interface ITabs {
  name: string
  value: FilterType
}
