import type { TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

/*
    Props:
    

*/
export default function TaskList({tasks, onStatusChange, onDelete}:TaskListProps){
    //Create a li for each task with their id as the key
    const createTaskList = tasks.map((task) => 
        <li key={task.id}>
            <TaskItem
            task={task}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
            />
        </li>
    )

    return(

        <>
            <div className="task-list">
                    <ul style={{listStyle: 'none'}}>{createTaskList}</ul>
            </div>
        
        </>
    )
}