import { useState } from 'react'

import './App.css'
import TaskList from './components/TaskList/TaskList'
import type { Task, TaskStatus } from './types'
import TaskItem from './components/TaskItem/TaskItem'

function App() {

  //Task Data
  let tasks: Task[] = [
      {
        id: '1',
        title: 'Task 1',
        description: 'Task 1 description.',
        status: 'pending',
        priority: 'low',
        dueDate: '10/11/2025'
      },

      {
        id: '2',
        title: 'Task 2',
        description: 'Task 2 description.',
        status: 'in-progress',
        priority: 'medium',
        dueDate: '11/1/2025'
      },

      {
        id: '3',
        title: 'Task 3',
        description: 'Task 3 description',
        status: 'completed',
        priority:'high',
        dueDate: '01/06/2025'
      }
  ]
  const [tasksData, setTaskData] = useState(tasks)

  const handleStatusChange = (taskId:string, newStatus:TaskStatus) =>{
    /*
      Find the task item by ID from the object data array 'tasksData'.
      Set the status of this specific item.
    */
    const taskItem = tasksData.filter((task) =>
      task.id === taskId
    )[0]
    taskItem.status = newStatus
  }

  const handleTaskDeletion = (taskId: string) =>{
    const taskItem = tasksData.filter((task) =>
      task.id === taskId
    )[0]
    const indexOfTask = tasks.indexOf(taskItem, 1)
    return tasksData.splice(indexOfTask)
  }

  return (
    <>
      <TaskList
      tasks={tasksData}
      onStatusChange={handleStatusChange}
      onDelete={handleTaskDeletion}
      />
    </>
  )
}

export default App
