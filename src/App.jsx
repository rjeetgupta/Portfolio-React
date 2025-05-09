import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Project from './components/Project/Project.jsx'
import Skill from './components/Skill/Skill.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import { ToastContainer } from "react-toastify"

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
