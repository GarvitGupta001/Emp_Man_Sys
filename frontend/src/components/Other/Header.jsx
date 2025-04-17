import React from 'react'

const Header = () => {
  return (
    <>
    <div className='text-white flex justify-between px-14 pt-4 items-center'>
        <div>
            <h1 className='text-5xl'>Hello,</h1>
            <h1 className='text-7xl'>User 🙂‍↕️</h1>
        </div>
        <button className='text-xl py-2 px-4 bg-red-700 rounded-lg text-white hover:bg-red-800 h-fit'>Log Out</button>
    </div>
    </>
  )
}

export default Header