import type { TaskFilterProps, TaskPriority, TaskStatus } from "../../types";

export default function TaskFilter({onFilterChange}:TaskFilterProps){
    const handleFiltering = (event:React.ChangeEvent<HTMLSelectElement>) =>{
       if (event.target.classList.contains('filterByStatus')) {
      let newStatus: TaskStatus;
      switch (true) {
        case event.target.value === 'pending':
          newStatus = 'pending'
          onFilterChange(newStatus)
          break;
        case event.target.value === 'in-progress':
          newStatus = 'in-progress'
          onFilterChange(newStatus)
          break;
        case event.target.value === 'completed':
          newStatus = 'completed'
          onFilterChange(newStatus)
          break;
        default:
          onFilterChange('') //Empty by default
          break;
      }
    }
    else if (event.target.classList.contains('filterByPriority')) {
      let newPriority: TaskPriority;
      switch (true) {
        case event.target.value === 'low':
          newPriority = 'low'
          onFilterChange(newPriority)
          break;
        case event.target.value === 'medium':
          newPriority = 'medium'
          onFilterChange(newPriority)
          break;
        case event.target.value === 'high':
          newPriority = 'high'
          onFilterChange(newPriority)
          break;
        default:
          onFilterChange('') //Empty by default
          break;
      }
    }
    else {
      console.log('Nothing interacted with.')
    }
    }

    return (
        <>
            <div>
                <select className="filterByStatus" onChange={handleFiltering}>
                    <option>All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <select className="filterByPriority" onChange={handleFiltering}>
                    <option>All Priorites</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
        </>
    )
}