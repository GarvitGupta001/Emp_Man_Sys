import React from 'react'

const Task = (props) => {
    const p = props.priority
    let bg1=""
    let bg2=""
    if (p === "High") {
        bg1 = "#E07A5F"
        bg2 = "crimson"
    } else if (p === "Moderate") {
        bg1 = "#F2CC8F"
        bg2 = "#FFFF67"
    } else if (p === "Low") {
        bg1 = "#81B29A"
        bg2 = "teal"
    }

  return (
    <div id= "taskcard" className='w-[20%] min-w-[350px] h-[100%] py-4 px-6 rounded-2xl shrink-0 flex flex-col gap-4' style={{backgroundColor: bg1}}>
        <div className='flex justify-between text-base items-center'>
            <h3 className='px-4 py-1 rounded-lg font-semibold' style={{backgroundColor: bg2}}>{p}</h3>
            <h3 className='font-normal'>13 March 2025</h3>
        </div>
        <h1 className='text-4xl font-medium'>Task Title</h1>
        <p id='taskdes' className='overflow-y-scroll text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eligendi nihil totam, culpa dolores consectetur numquam quia iste nesciunt. Temporibus.</p>
    </div>
  )
}

export default Task