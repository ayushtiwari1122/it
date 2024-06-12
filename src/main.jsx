import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Float from './pages/Float'
import Comment from './pages/Comment'
import Patners from './pages/Patners'
import Second from './pages/Second'
import Pop from './pages/Pop'
import Students from './pages/Students'
import Learn from './pages/Learn'

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
  <Second/>
 <Header/>

 <Pop/>
 <Learn/> 
 <Students/>
 <Patners/>
 <Comment/>
 <Float/>
 <Footer/>
 </>
)
