import React from 'react'
import Task from './Task'

const TaskList = () => {
  return (
    <div id="tasklist" className='rounded m-8 h-[55%] flex gap-6 flex-nowrap overflow-x-scroll'>
        <Task priority="High"/>
        <Task priority="Moderate"/>
        <Task priority="Low"/>
        <Task priority="High"/>
        <Task priority="Moderate"/>
        <Task priority="Low"/>
        <Task priority="High"/>
        <Task priority="Moderate"/>
        <Task priority="Low"/>
    </div>
  )
}

export default TaskList