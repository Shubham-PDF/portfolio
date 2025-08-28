import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Achievements from './Components/Achievements'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <About></About>
     <Skills></Skills>
     <Achievements></Achievements>
     <Projects></Projects>
     <Contact></Contact>
    </>
  )
}

export default App
