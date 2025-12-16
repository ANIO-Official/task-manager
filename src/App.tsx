import { useState } from 'react'

import './App.css'
import TaskList from './components/TaskList/TaskList'
import type { Task, TaskStatus } from './types'
import TaskFilter from './components/TaskFilter/TaskFilter'

function App() {

  //Task Data Object Array (Initial Value)
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
      priority: 'high',
      dueDate: '01/06/2025'
    }
  ]
  const [tasksData, setTasksData] = useState<Task[]>(tasks) //initial Data for modifying
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([...tasksData])

  //Change status of task item
  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    /*
      Find the task item by ID from the object data array 'tasksData'.
      Set the status of this specific item.
    */
    setFilteredTasks(prevTask =>
      prevTask.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    )
  }

  const handleTaskDeletion = (taskId: string) => {
    //return only tasks that are not of the id.
    const newTasksData = tasksData.filter((task) => task.id !== taskId)

    //Set the updated data array as the new state. Which should render new data.
    setFilteredTasks(newTasksData)
  }

  const handleFilteringFromChild = (newValue: string) => {
    // console.log(`Recieved from child: ${newValue}`) //check
    ///return by priority
    if (newValue === 'low' || newValue === 'medium' || newValue === 'high') {
      const tasksOfPriority:Task[] = tasks.filter((task) => task.priority === newValue)
      setFilteredTasks(tasksOfPriority)
    }
    //return by status
    else if (newValue === 'pending' || newValue === 'in-progress' ||newValue ===  'completed') {
      const tasksOfStatus: Task[] = tasks.filter((task) => task.status.toString() === newValue)
      setFilteredTasks(tasksOfStatus)
      //reset
    }
     else { 
      setFilteredTasks([...tasks]) 
      console.log('Reset')
    }
  }

  return (
    <>
      <TaskFilter
        onFilterChange={handleFilteringFromChild}
      />
      <TaskList
        tasks={filteredTasks} //sends state variable
        onStatusChange={handleStatusChange}
        onDelete={handleTaskDeletion}
      />
    </>
  )
}

export default App
