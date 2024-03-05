import { ITasks } from '../interfaces'

export const sumCompleted = (tasks: ITasks[]): number => {
  return tasks.reduce((sum, task) => {
    return sum + (task.completed ? 0 : 1)
  }, 0)
}
