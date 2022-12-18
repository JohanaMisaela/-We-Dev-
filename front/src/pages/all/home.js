import React from 'react'
import Footer from '../../layouts/footer.js'
import Header from '../../layouts/Header.js'
import Addpost from '../../components/addpost.js'
import Viewpost from '../../components/viewpost.js'
import './../../assets/styles/home.css'
function Home() {
  return (
    <div>
       <Header/>

       <div className='card-addpost'> <Addpost/></div>
   
    <Viewpost/>
    
       <Footer/>
    </div>
  )
}

export default Home