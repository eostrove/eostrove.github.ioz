import './css/App.css';
import './css/main.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Nav from './Nav';
import About from './About';
import Home from './Home';
import Sidebar from './Sidebar';
import Contact from './Contact';
import Project from './Project';
import Resume from './Resume';


function App() {
  return (
    <BrowserRouter>
      <Nav />
        <div className='wrapper'>
          <Sidebar />
            <div className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="projects" element={<Project />} />
                <Route path="resume" element={<Resume />} />
              </Routes>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
