import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/pages/Portfolio';
import AboutMe from './components/pages/aboutMe';
import Testimonials from './components/pages/Testimonials';
import Skill from './components/pages/Skill';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Footer from './components/footer/Footer';


function App() {

  return (
    <>
    <div>
  <Navbar/>
   <Home/>
   <Skill/>
   <AboutMe/>
   <Portfolio/>
   <Testimonials/>
   <Contact/>
   <Footer/>
      </div>      
    </>
  )
}

export default App