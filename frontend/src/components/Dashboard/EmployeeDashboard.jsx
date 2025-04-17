import React from 'react'
import Header from '../Other/Header'
import TaskNumbers from '../Other/TaskNumbers'
import TaskList from '../Other/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='w-screen h-screen'>
    <Header />
    <TaskNumbers />
    <TaskList />
    </div>
    
  )
}

export default EmployeeDashboard