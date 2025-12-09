import { useState } from "react"
import type { TaskItemProps, TaskStatus } from "../../types"


/*
    Props:
    1. Task -> Task typed Object with data
    2. onStatusChange - > Function to change status. Takes a task id & newStatus value
    3. onDelete -> Deletes task. Takes a Task ID

*/
export default function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
    
    const [selectedValue, setSelectedValue] = useState<string>(task.status)
    
    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{

        //Set New Select Value on Change
        setSelectedValue(event.target.value)

        /*
            Change the TaskStatus type based on the value of the select.
            Cannot explicitly state newStatus = event.target.value because
            the select value returns a string. And though the TaskStatus type
            uses strings, they are still not technically of the same type. (I know, I tried.)
        */
        let newStatus:TaskStatus
        if (event.target.value === 'pending'){
            newStatus = 'pending'
        }
        else if (event.target.value === 'in-progress'){
            newStatus = 'in-progress'
        }
        else{newStatus = 'completed'}

        //set newStatus as the variable for the onStatusChange function prop to use.
        onStatusChange (task.id, newStatus)
    }

    const handleDeletion = () =>{
        onDelete(task.id)
    }
    
    const createTask = (
            <div>
                <div>
                    <h2>{task.title}</h2>
                    <select onChange={handleStatusChange} value={selectedValue}>
                        {/* Set the values to the string values of the type */}
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button onClick={handleDeletion}>Delete</button>
                </div>
                <p>{task.dueDate}</p>
                <p>{task.description}</p>
                <p>{task.priority}</p>
            </div>
    )
    //Create Task Item
    return (
        <>
          {createTask}
        </>
    )
}