
import './App.scss';
import Index from './Components/Intro/Index';
// import AboutMe from './Components/About  me/AboutMe';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
// import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Index/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
