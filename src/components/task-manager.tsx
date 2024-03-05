import { useState, useEffect, FC } from 'react'
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Tabs,
  Tab,
  Divider,
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { blue, green } from '@material-ui/core/colors'
import {
  addTask,
  deleteTask,
  setFilter,
  toggleTaskStatus,
} from '../store/tasks-slice'
import { sumCompleted } from '../helpers/sum-completed'
import { useAppDispatch, useAppSelector } from '../hooks'
import { tabs } from '../_config'
import { FilterType } from '../interfaces'

const TaskManager: FC = () => {
  const [userValue, setUserValue] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const { tasks, filter } = useAppSelector((state) => state.tasksSlice)
  const dispatch = useAppDispatch()

  const clickAdd = () => {
    setShowAlert(false)
    if (userValue.length === 0) return
    if (userValue.length >= 80) return setShowAlert(true)
    setUserValue('')
    const newTask = {
      'title': userValue,
      'completed': true,
      'id': Date.now(),
    }
    dispatch(addTask(newTask))
  }

  const handleDeleteTask = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => {
    event.preventDefault()
    event.stopPropagation()
    dispatch(deleteTask(id))
  }

  const selectTab = (value: FilterType) => {
    dispatch(setFilter(value))
  }

  const switchCompleted = (id: number) => {
    dispatch(toggleTaskStatus(id))
  }

  const filterNow = () => {
    switch (filter) {
      case 'completed': {
        return tasks.filter((task) => !task.completed)
      }
      case 'current': {
        return tasks.filter((task) => task.completed)
      }
      default: {
        return tasks
      }
    }
  }

  const taskFilter = filterNow()

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <main className="tasks-component">
      <Paper style={{ 'padding': 20, 'maxWidth': 500, 'margin': '20px auto' }}>
        <TextField
          label="New Task"
          fullWidth
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userValue}
          onChange={(e) => setUserValue(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ 'margin': '20px 0' }}
          onClick={clickAdd}
        >
          Add Task
        </Button>

        <Tabs
          value={filter}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {tabs.map((e) => <Tab
            label={e.name}
            value={e.value}
            key={e.value}
            onClick={() => selectTab(e.value)}
          />)}
        </Tabs>

        <List>
          {taskFilter.length === 0 ? <p>List is Empty!</p> : taskFilter.map((e) => <ListItem button key={e.id} onClick={() => switchCompleted(e.id)}>
            <ListItemText
              primary={e.title}
              secondary={e.completed ? 'Not Completed' : 'Completed'}
              secondaryTypographyProps={{
                'style': { 'color': e.completed ? blue[800] : green[500] },
              }}
            />
            <Button
              onClick={(event) => handleDeleteTask(event, e.id)}
              color="secondary"
            >
                  Delete
            </Button>
          </ListItem>)
          }
        </List>
        <Divider style={{ 'margin': '20px 0' }} />
        <div style={{ 'marginTop': 20 }}>
          <p>Completed Tasks: {sumCompleted(tasks)}</p>
          <p>Uncompleted Tasks: {tasks.length - sumCompleted(tasks)}</p>
        </div>
        {showAlert &&
          <Alert severity="warning">
            Sorry, your message exceeds the maximum length. Please shorten it to
            80 characters for sending.
          </Alert>
        }
      </Paper>
    </main>
  )
}

export default TaskManager
