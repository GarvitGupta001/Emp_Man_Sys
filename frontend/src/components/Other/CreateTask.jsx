import React, { useState } from 'react'
import axios from 'axios'

const CreateTask = () => {

    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [ass_to, setAss_to] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")

    const SubmitHandler = (e) => {
        e.preventDefault()
        const data = {
            title,
            date,
            ass_to,
            category,
            description
        }
        axios.post("http://localhost:3000/api/new_task", data)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.message)
        })
        setTitle("")
        setDate("")
        setAss_to("")
        setCategory("")
        setDescription("")
    }
  return (
    <div className='mx-6 mt-5 bg-[#C4CBCA] rounded-2xl bg-opacity-20 py-8'>
        <form className='flex justify-evenly' onSubmit={(e) => {SubmitHandler(e)}}> 
            <div className='w-[40%]'>
                <div>
                    <h1 className='text-slate-800 text-2xl mt-3 pl-3'>Task Title</h1>
                    <input className='CreateTaskInput text-slate-800 text-xl py-1 px-2 w-[100%] bg-transparent border-none shadow-md border-[1px] rounded-xl placeholder:text-slate-700' 
                    type="text" 
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                    placeholder='Make your UI design'/>
                </div>
                <div>
                    <h1 className='text-slate-800 text-2xl mt-3 pl-3'>Date</h1>
                    <input className='CreateTaskInput text-slate-800 text-xl py-1 px-2 w-[100%] bg-transparent border-none shadow-md border-[1px] rounded-xl placeholder:text-slate-700' 
                    type="date" 
                    value={date}
                    onChange={(e) => {setDate(e.target.value)}}
                    placeholder="dd-mm-yyyy"/>
                </div>
                <div>
                    <h1 className='text-slate-800 text-2xl mt-3 pl-3'>Asigned to</h1>
                    <input className='CreateTaskInput text-slate-800 text-xl py-1 px-2 w-[100%] bg-transparent border-none shadow-md border-[1px] rounded-xl placeholder:text-slate-700' 
                    type="text" 
                    value={ass_to}
                    onChange={(e) => {setAss_to(e.target.value)}}
                    placeholder='Employee Name'/>
                </div>
                <div>
                    <h1 className='text-slate-800 text-2xl mt-3 pl-3'>Category</h1>
                    <input className='CreateTaskInput text-slate-800 text-xl py-1 px-2 w-[100%] bg-transparent border-none shadow-md border-[1px] rounded-xl placeholder:text-slate-700 mb-3 pl-3' 
                    type="text" 
                    value={category}
                    onChange={(e) => {setCategory(e.target.value)}}
                    placeholder='Design, Dev, etc.'/>
                </div>
            </div> 
            <div className='w-[40%] flex flex-col gap-[2%] '>
                <div className=' h-[80%]'>
                    <h1 className='text-slate-800 text-2xl mt-3 pl-3'>Description</h1>
                    <textarea className='CreateTaskInput text-slate-800 text-xl py-1 px-2 w-[100%] h-[70%] bg-transparent border-none shadow-md border-[1px] rounded-xl placeholder:text-slate-700 resize-none'
                    value={description}
                    onChange={(e) => {setDescription(e.target.value)}}
                    ></textarea>
                </div>
                <button type="submit" className='text-xl font-medium text-white h-[20%] rounded-xl bg-[#4EA699] hover:shadow-xl'>Create Task</button>
            </div>
        </form>
    </div>
  )
}

export default CreateTask