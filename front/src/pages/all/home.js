import React from 'react'
import Navbar from '../../components/Navbar.js'
import Header from '../../components/Header.js'
import Addpost from '../../layouts/addpost.js'
import Viewpost from '../../layouts/viewpost.js'
function Home() {
  return (
    <div>
       <Header/>
    <Addpost/>
    <Viewpost/>
    
        <Navbar/>
    </div>
  )
}

export default Home