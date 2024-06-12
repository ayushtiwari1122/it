import React from 'react'
import img1 from './partner1.png'
import img2 from './partner2.png'
import img3 from './partner3.png'
import img4 from './partner4.png'

function Patners() {
  return (
    <>
    <section className='bg-gray-300 p-10  md:flex md:justify-between'>
<div className='md:mt-10'><b className='text-black text-4xl mb-2'>Trusted by companies</b>
<p>Explore all of our courses and pick your suitable ones to enroll and start learning with us!</p>
<button className='text-white bg-blue-600 p-3 mt-4'>View All Partners</button>
</div>
<div>
<div className='flex justify-between   mt-6 md:gap-20 '>
    <img src={img1} alt="" />
    <img src={img2} alt="" />
    <img src={img3} className='hidden md:block' alt="" />
    <img src={img4} className='hidden md:block' alt="" />
</div>
<div className='flex justify-between mt-6'>
    <img src={img1} alt="" />
    <img src={img2} alt="" />
    <img src={img3} className='hidden md:block' alt="" />
    <img src={img4} className='hidden md:block' alt="" />
</div>
<div className='flex justify-between mt-6'>
    <img src={img1} alt="" />
    <img src={img2} alt="" />
    <img src={img3} className='hidden md:block' alt="" />
    <img src={img4} className='hidden md:block' alt="" />
</div>

</div>

    </section>
    </>
  )
}

export default Patners