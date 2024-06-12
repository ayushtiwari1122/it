import React from 'react'
import img4 from './shape3.png'
import img5 from './shape2.png'
import img2 from './women.jpg'
function Float() {
  return (
    <>
     <section className=''>
    <section className='md:relative'> 
    <img src={img5} className='hidden an md:ml-20 absolute md:block' alt="" />

        <div className='mx-20 my-10 md:flex md:gap-10    md:ml-80'>
            <img src={img2} className='bols md:w-[400px]'  alt="" />
        <div><b className='text-4xl md:text-5xl text-blue-950 '>
Affordable online courses and learning opportunities​</b>
<p className='mt-5'>Explore all of our courses and pick your suitable ones to enroll and start learning with us!</p>
<button className='bord text-blue-950 mm'>View all stories</button>
</div> 
</div>
    </section>

    <section  className='md:relative  '>
        <div className='md:absolute md:left-8 md:top-8 ani hidden md:block'><img src={img4}  alt="" />
=        </div>
        <div className='bg-blue-900 bc md:ml-80  md:gap-6 text-white   p-8 py-20 md:flex'>
            <div><i className='bi-person text-4xl md:text-5xl '></i></div>
           <div><b className='text-2xl md:text-4xl '>Transform access to education</b>
        <p className='md:mt-5'>Explore all of our courses and pick your suitable ones to enroll and start learning with us!</p>
        <button className='bg-blue-400 my-3  p-3 md:mt-5'>Register for free</button></div> 
        </div>

    </section>
   </section>
    </>
  )
}

export default Float