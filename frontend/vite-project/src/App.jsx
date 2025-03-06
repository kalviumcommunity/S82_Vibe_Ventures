import React from 'react'
import './App.css'
import Home from './home'
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
