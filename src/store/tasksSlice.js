import { createSlice } from '@reduxjs/toolkit';

const tasks = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
  { id: 3, title: 'Task 3', completed: false },
  { id: 4, title: 'Task 4', completed: true },
  { id: 5, title: 'Task 5', completed: false },
  { id: 6, title: 'Task 6', completed: true },
];
const userTask = localStorage.getItem('tasks');

const initialState = {
  tasks: userTask ? JSON.parse(userTask) : tasks,
  filter: 'all',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks = [action.payload, ...state.tasks];
    },
		deleteTask(state, action) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTaskStatus(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTaskStatus, setFilter, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
