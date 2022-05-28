import { useState } from 'react'
import Login from './components/Login'
import Signup from './components/Siginup'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'

const App = () => (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element={<Login/>} />

    <Route path="*"
    element={<Navigate to="/" />}/>

    

  </Routes>
</BrowserRouter>
)
export default App
