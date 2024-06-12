import React from 'react'
import img from './logo.png'
function Second() {
  return (
    <>
    <section className='p-5'>
      <div className='flex justify-between'>
    <div className='flex gap-12 md:ml-10'>
    <img src={img} alt="" />
    <div className='hidden md:block'>
      <p className='flex mt-[14px] '  ><i class="bi bi-journal-text"></i><b>Catagory</b></p>
    </div>
    <div className='relative hidden md:block'>
    <input type="text" placeholder='Search for everyting' className='bg-gray-200 py-3 px-4 w-[300px] rounded-sm mt-[3px] outline-none' />
    <b><button><i className='bi-search text-blue-600 absolute top-4 right-4 '></i></button></b>
    </div>
    </div>


<div className='md:mr-6'>
    <div className='md:block hidden'>
 <b className='flex gap-10 mt-3 text-ml'>  
  <div >
  <select name="language" id="language">
  <option value="javascript">Home</option>
  <option value="python">Python</option>
  <option value="c++">C++</option>
  <option value="java">Java</option>
</select></div>
<div>
  <select name="language" id="language">
  <option value="javascript">Vlog</option>
  <option value="python">Python</option>
  <option value="c++">C++</option>
  <option value="java">Java</option>
</select></div>
<div>
  <select name="language" id="language">
  <option value="javascript">Pages</option>
  <option value="python">Python</option>
  <option value="c++">C++</option>
  <option value="java">Java</option>
</select></div>
<div>
  <select name="language" id="language">
  <option value="javascript">Courses</option>
  <option value="python">Python</option>
  <option value="c++">C++</option>
  <option value="java">Java</option>
</select></div>
<div>
  <i className='bi-cart-fill'></i>
</div>
<button className='bg-red-600 px-3  rounded py-2 mt-[-6px] text-white'>
  <i className='bi-person-fill mr-2'></i>
  Sign up
</button>

</b>


    </div>
    </div>
    <div className='mt-2 md:hidden'>
    <b className=''> <i className='bi-list  mr-10  text-2xl'></i></b> 
    </div>
    </div>
    </section>
    <hr className='mt-2 shadow-3xl' />
    </>
  )
}

export default Second