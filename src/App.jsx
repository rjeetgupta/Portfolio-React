import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Project from './components/Project/Project.jsx'
import Skill from './components/Skill/Skill.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </>
  )
}

export default App
