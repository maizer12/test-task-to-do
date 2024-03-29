import { ITabs, ITasks } from './interfaces'

export const tasks: ITasks[] = [
  { 'id': 1, 'title': 'Task 1', 'completed': false },
  { 'id': 2, 'title': 'Task 2', 'completed': true },
  { 'id': 3, 'title': 'Task 3', 'completed': false },
  { 'id': 4, 'title': 'Task 4', 'completed': true },
  { 'id': 5, 'title': 'Task 5', 'completed': false },
  { 'id': 6, 'title': 'Task 6', 'completed': true },
]

export const tabs: ITabs[] = [
  {
    'name': 'All',
    'value': 'all',
  },
  {
    'name': 'Completed',
    'value': 'completed',
  },
  {
    'name': 'Current',
    'value': 'current',
  },
]
