import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler = (e) => {
        e.preventDefault()
        setEmail("")
        setPassword("")
    }

    return (
        <div className='h-screen w-screen flex justify-center items-center flex-col'>
            <h1 className='text-5xl mb-2 p-1 text-zinc-50 font-mono font-semibold'>Employee Management System</h1>
            <form
                onSubmit={(e) => {
                    submitHandler(e)
                }}
                className='flex flex-col p-10 rounded-xl'>
                <input
                    name='email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    required
                    type="email"
                    placeholder='E-mail' 
                    className='text-xl w-96 py-2 px-4 mb-3 bg-transparent border-zinc-50 border-2 rounded-lg text-white' />
                <input
                    name='password'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    required
                    type="password"
                    placeholder='Password'
                    className='text-xl py-2 px-4 mb-3 bg-transparent border-zinc-50 border-2 rounded-lg text-white' />
                <button type="submit" className='text-xl py-2 px-4 bg-teal-600 rounded-lg text-white hover:bg-teal-800'>Log In</button>
            </form>
        </div>
    )
}

export default Login