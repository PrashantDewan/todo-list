import React from 'react'

const page = () => {
  return (
    <>
    <h1 className='bg-black text-white text-5xl font-bold text-center p-5'>Prashant Dewan Todo List</h1>
    <form>
      <input type="text" className="form-control text-2xl border-zinc-800 border-4 m-8 px-4 py-2" placeholder='Enter your task' />
      <input type="text" className="form-control text-2xl border-zinc-800 border-4 m-8 px-4 py-2" placeholder='Enter description ' />
    </form>
    </>
  )
}

export default page
