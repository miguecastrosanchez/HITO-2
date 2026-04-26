import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './components/Home'
import CardPizza from './components/CardPizza'
import Footer from './components/Footer'

import Login from './components/Login'
import Register from './components/Register'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='estructura'>
    
    <Navbar/>
    <Header/>

    <Login/>
    <Register/>
    
    {/* <div className='contenido-principal'>
    <Home/>
    </div> */}

    <Footer/>

   </div>
    </> 
  )
}

export default App
