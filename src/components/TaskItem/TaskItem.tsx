import type { TaskItemProps } from "../../types"


export default function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
    
    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        /* Send this value as the new value for the onStatusChange function to use*/
        const newStatus = event.target.value
        onStatusChange (task.id, newStatus)
    }

    const handleDeletion = () =>{
        onDelete(task.id)
    }
    
    function createTask() {
            <div>
                <div>
                    <h2>{task.title}</h2>
                    <select onChange={handleStatusChange}>
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
    }

    //Create Task Item
    return (
        <>
          {createTask()}
        </>
    )
}