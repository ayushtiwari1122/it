import React from 'react'
import img from './shape5.png'
function Learn() {
  return (
    <>
<section className='hidden md:block '>

    <div className='relative  '>
    <img src={img} className='learn' alt="" />
   <div className=' py-10 boldss text-end justify-between  flex'>
    <div className='text-center  md:flex p-5'>
        <i class="text-3xl flex text-white bi-journals">
      <b>  <p className='text-2xl text-white'>Learn the Latest Top Skills</p></b></i>

    </div>
    <div className=' text-center md:flex p-5'>
        <i class="text-3xl flex  text-white bi-journals">
      <b>  <p className='text-2xl text-white'>Learn the Latest Top Skills</p></b></i>

    </div>
    <div className='text-center  md:flex  p-5'>
        <i class="text-3xl flex text-white bi-journals">
      <b>  <p className='text-2xl text-white'>Learn the Latest Top Skills</p></b></i>

    </div>
    </div>
    </div>
    </section>
    <section className='md:hidden'>
      <div>
        
        </div> 


    </section>

    </>
  )
}

export default Learn