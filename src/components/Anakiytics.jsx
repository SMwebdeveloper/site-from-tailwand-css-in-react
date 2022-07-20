import React from 'react'
import Laptop from '../assets/main.png'

const Anakiytics = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
        <div className='max-w-[1200px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALIYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, natus ad! Ullam sit officia natus, quibusdam autem deleniti dolor a quam harum incidunt, quos possimus. Non nemo debitis fugiat aliquam!</p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:m-0 py-3'>Get started</button>
       
            </div>
        </div>
    </div>
  )
}

export default Anakiytics