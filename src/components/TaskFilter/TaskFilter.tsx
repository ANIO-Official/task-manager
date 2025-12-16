import { useState } from "react";
import type { TaskFilterProps } from "../../types";

export default function TaskFilter({onFilterChange}:TaskFilterProps){
  
  const [filterValue, setFilterValue] = useState({
    status: '',
    priority: ''
  })

  const handleFiltering = (event:React.ChangeEvent<HTMLSelectElement>) =>{
      const {name, value} = event.target
      setFilterValue( prevFilters => ({
        ...prevFilters,
        [name] : value
      })
      )
      console.log(`Filter set | ${name} : ${value}`)
      onFilterChange(value)
  }

    return (
        <>
            <div>
                <select name='status' className="filterByStatus" onChange={handleFiltering} value={filterValue.status}>
                    <option value=''>All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <select name='priority' className="filterByPriority" onChange={handleFiltering} value={filterValue.priority}>
                    <option value=''>All Priorites</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
        </>
    )
}