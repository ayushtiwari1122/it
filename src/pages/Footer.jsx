import React from 'react'
import img from './logo.png'
import img1 from './shape7.png'

function Footer() {
  return (
    <>
    <section className='bgl p-6 md:py-10 md:flex md:p-5 md:pr-40 md:gap-32  md:pl-10 relative '>
        <div className='md:ml-10 ml-3 md:mr-10 '><img src={img} className='mb-3' alt="" />
        <p className='lin'>Lorem, ipsum dolor sit amet consectetur adipisicing  Quisquam modi quasi provident neque
           sunt corporis laudantium rem!</p>
           <ul className='text-white flex gap-3 my-5'>
            <li className='bg-gray-400 px-2 '><i className='bi-facebook'></i></li>
            <li  className='bg-gray-400 px-2'><i className='bi-messenger'></i></li>
            <li  className='bg-gray-400 px-2'><i className='bi-twitter'></i></li>
            <li  className='bg-gray-400 px-2'><i className='bi-pinterest'></i></li>


            </ul>
           </div>
          
            <div className='flex justify-between mr-20 md:mr-0 md:gap-32 '>
            <ul className='p-2'><b className='text-md text-black '>About us</b>
            
            <li>About Us</li>
            <li>Course</li>
            <li>Instructor</li>
            <li>Events</li>
            <li>managers</li>
            </ul>
            <ul className='p-2'><b className='text-md text-black '>Links </b>
            
            <li>About Us</li>
            <li>Course</li>
            <li>Instructor</li>
            <li>Events</li>
            <li> Instructor</li>
            </ul>

            </div>
            <div className='flex justify-between mr-4 md:gap-32 '>
            <ul className='p-2'><b className='text-md text-black '>Resourses </b>
            
            <li>About Us</li>
            <li>Course</li>
            <li>Instructor</li>
            <li>Events</li>
            <li>profile</li>
            </ul>
            <ul className='p-2 ml-4'><b className='text-md text-black '>Contact Us</b>
            
            <li className=''><b className='text-black text-sm '>Address:</b> 2750 Quadra Street <br />Victoria, Canada.</li>
            <li><b className='text-black text-sm'>Email:</b>hello@edla.com</li>
            <li><b className='text-black text-sm'>Phone:</b>+1-485-456-0102</li>
            <li><b className='text-black text-sm'>Fax:</b>+1-0785 4578964</li>
            
            </ul>
            </div>
          <div className='absolute right-0 bottom-0 mr-2 ml-1 hidden md:block'>
            <img src={img1} className='w-[200px]'
             alt="" />
          </div>



    </section>
    <hr />
    <div className='text-center py-4 bgl'><p>Copyright Edla. All Rights Reserved by <b className='text-blue-600 text-xl'>EnvyTheme</b></p></div>

    </>
  )
}

export default Footer