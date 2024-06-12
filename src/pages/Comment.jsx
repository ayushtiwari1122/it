import React from 'react'
import im from './user1.jpg'
import iml from './gray.png'
function Comment() {
  return (
    <>
    <section className='p-10  boo'>
        <b className='text-3xl text-black '>Learners say about Edla</b>
        <p className='mt-3'>Explore all of our courses and pick your suitable ones to enroll and start learning with us! </p>
        <div className='md:flex md:px-7 mt-4 '>
            <div className='bg-white p-3 py-10 px-6 relative md:mr-8 mb-4'>
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore 
            et mag na aliqua. Minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo conse quatt adipiscing dolore.
            <div className='flex '>
             <img src={im} className=' rounded-full ' alt="" />
         <p className='text-black  mt-14 ml-2'>Jasica Lora <br />
          <span className='text-gray-300 text-sm'>Web Developer</span></p>
          </div>             <img src={iml}  className='absolute right-3 bottom-7'alt="" />
            </div>
            <div className='bg-white p-3 relative px-6 py-10  md:mr-8  mb-4'>
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore 
            et mag na aliqua. Minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo conse quatt adipiscing dolore.
            <div className='flex '>
             <img src={im} className=' rounded-full ' alt="" />
         <p className='text-black  mt-14 ml-2'>Jasica Lora <br />
          <span className='text-gray-300 text-sm'>Web Developer</span></p>
          </div>             <img src={iml}  className='absolute right-3 bottom-7'alt="" />
            </div>
            <div className='bg-white px-6 p-3 py-10 relative mb-4 '>
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore 
            et mag na aliqua. Minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo conse quatt adipiscing dolore.
         <div className='flex '>
             <img src={im} className=' rounded-full ' alt="" />
         <p className='text-black  mt-14 ml-2'>Jasica Lora <br />
          <span className='text-gray-300 text-sm'>Web Developer</span></p>
          </div>  
            <img src={iml}  className='absolute right-3 bottom-7'alt="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Comment