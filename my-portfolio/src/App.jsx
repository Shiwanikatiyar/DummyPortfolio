import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import About from './Components/About'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    Aos.init();

  },[])

  return (
    <>
      <Navbar/>
      <div  className="Container" style={{padding:'0px 90px'}}>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      </div>
      
    </>
  )
}

export default App
