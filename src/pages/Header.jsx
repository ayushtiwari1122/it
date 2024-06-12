import React from 'react'
import img3 from './user1.jpg'
import img from './courses-img1.jpg'
import img2 from './shape5.png'
import img8 from './shape3.png'
import img1 from './shape1.png'
import img6 from './shape2.png'


function Header() {
  return (
    <>
   <section className='bge p-7 md:flex relative md:pb-16  '>
    <div className='text-center md:mt-10  md:mr-6 md:ml-6' >
      <p className=' md:text-left'><b className='text-3xl text-blue-950 m-3 md:text-7xl'>Start learning from the world’s best institutions</b></p>
      <p className='mt-2 text-sm od md:text-left md:text-base md:mt-3 md:mr-20'>Flexible easy to access learning opportunities can bring 
        a significant change in how individuals prefer to learn! The Edla can offer you to enjoy the beauty of eLearning!</p>
        <form action="" className='mt-3 md:text-left md:'>
          <input type="text" className='w-full md:w-3/4 p-2 md:py-3 outline-none bg-white aa'  placeholder='What do you want to learn today?'/>
          <button className='bg-blue-400 text-white text-sm md:py-[14px] py-[10px] right-0 top-[-6px]  px-10 mt-[7px] '><b>Search</b></button>

        </form>
        <p className='mt-5 md:mt-8 md:ml-7 flex md:gap-3 '>
          <img src={img3} className='w-10 rounded-full ml-1' alt="" />
          
          <img src={img3} className='w-10 rounded-full ml-[-1rem]' alt="" />
          <img src={img3} className='w-10 rounded-full ml-[-1rem] ' alt="" />

<p className='text-sm  '>
Need help? 
<a href=""><u className='mr-1'>Contact our Edla <br /> support</u></a>
Tell us about your query
</p>
        </p>
        <p className='text-blue-950 text-sm mt-6 md:ml-7 md:text-left md:mt-8 '><i className='bi-send'></i><u><b> Discover all courses</b></u></p>

    </div>

    <div className='mt-4 md:flex md:gap-5 relative md:mr-10 '>
      
    <img src={img} className='h-[300px] md:mt-10 w-full md:w-[300px]  s' alt="" />
      <p className='s1'>
      <img src={img3} className='md:w-[800px] w-full  ss mt-2' alt="" />
      <img src={img} className='md:w-[800px] w-full sss mt-2' alt="" /></p>

   
      <img src={img2} className='absolute hidden  md:block right-1 w-[500px] a' alt="" />

   
      </div>
      <img src={img8} className='absolute hidden md:block aaa' alt="" />
      <img src={img1} className='absolute hidden md:block top-0 left-0' alt="" />
      <img src={img6} className='absolute hidden md:block top-4 left-[50%]' alt="" />

   </section>
    </>
  )
}

export default Header