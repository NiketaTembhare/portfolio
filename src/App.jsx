import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

