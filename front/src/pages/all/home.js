import React from 'react'
import Footer from '../../components/footer.js'
import Header from '../../components/Header.js'
import Addpost from '../../layouts/addpost.js'
import Viewpost from '../../layouts/viewpost.js'
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