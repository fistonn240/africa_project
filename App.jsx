
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create'
import Update from './Components/Update'
import Delete from './Components/Delete'
import './App.css'

function App() {
  
  return (
    <>
    <Routes>
     <Route path='/' element = {<Home/>}/>
     <Route path='/create' element = {<Create/>}/>
      <Route path='/update' element = {<Update/>}/>
      <Route path='/delete' element = {<Delete/>}/>
    </Routes>
              
    </>
  )
}

export default App
