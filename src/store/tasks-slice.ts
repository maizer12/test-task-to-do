import { createSlice } from '@reduxjs/toolkit'
import { tasks } from '../_config'
import { FilterType, ITasks } from '../interfaces'

const userTask = localStorage.getItem('tasks')

interface ITasksSliceState {
  tasks: ITasks[]
  filter: FilterType
}

const initialState: ITasksSliceState = {
  'tasks': userTask ? JSON.parse(userTask) : tasks,
  'filter': 'all',
}

const tasksSlice = createSlice({
  'name': 'tasks',
  initialState,
  'reducers': {
    addTask(state, action: { payload: ITasks }) {
      state.tasks = [action.payload, ...state.tasks]
    },
    deleteTask(state, action: { payload: number }) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    toggleTaskStatus(state, action: { payload: number }) {
      const task = state.tasks.find((task) => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    setFilter(state, action: { payload: FilterType }) {
      state.filter = action.payload
    },
  },
})

export const { addTask, toggleTaskStatus, setFilter, deleteTask } =
  tasksSlice.actions

export default tasksSlice.reducer
