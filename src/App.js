
import './App.css';
import Name from './component/Name';
import Navbar from './component/Navbar';
 import Picture from './component/Picture';
import Skills from './component/Skills';
import Project from './component/Project';
import About from './component/About';
import Contact from './component/Contact';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Name />
     <Picture />
     <Skills />
     <Project />
     <About />
     <Contact />
    </div>
  );
}

export default App;
