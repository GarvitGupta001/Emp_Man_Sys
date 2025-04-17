import React from 'react'

const TaskNumbers = () => {
  return (
    <div className='px-8 mt-14 flex justify-between gap-2'>
        <div className='w-[24%] min-w-[210px] p-5 rounded-2xl bg-[#839788]'>
            <h1 className='text-6xl mb-8'>0</h1>
            <h2 className='text-4xl'>Completed</h2>
        </div>
        <div className='w-[24%] min-w-[210px] p-5 rounded-2xl bg-[#AF929D]'>
            <h1 className='text-6xl mb-8'>0</h1>
            <h2 className='text-4xl'>Accepted</h2>
        </div>
        <div className='w-[24%] min-w-[210px] p-5 rounded-2xl bg-[#E07A5F]'>
            <h1 className='text-6xl mb-8'>0</h1>
            <h2 className='text-4xl'>Failed</h2>
        </div>
        <div className='w-[24%] min-w-[210px] p-5 rounded-2xl bg-[#D2D6EF]'>
            <h1 className='text-6xl mb-8'>0</h1>
            <h2 className='text-4xl'>New</h2>
        </div>
    </div>
  )
}

export default TaskNumbers