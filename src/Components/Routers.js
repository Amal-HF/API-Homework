import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Read from './Read'
import Create from './Create'
import Update from './Update'
import ReadDB from './ReadDB'

function Routers() {
  return (
    <div>
        <Nav/>
        <Routes>
            <Route exact path='/' element={<Create/>}/>
            <Route path='/Read' element={<Read/>}/>
            <Route path='/Update' element={<Update/>}/>
            <Route path='/ReadDB' element={<ReadDB/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default Routers