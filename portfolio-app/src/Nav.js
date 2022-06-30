import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header className='navbar'>
        <div className='navbar_title'>Emily Ostrove</div>
            <div className="navbar_item">
                {/* format for links and hover in main.css */}
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </div>
            <div className="navbar_item">
                <NavLink className="nav-link" aria-current="page" to="about">About</NavLink>
            </div>
            <div className="navbar_item">
                <NavLink className="nav-link" aria-current="page" to="contact">Contact</NavLink>
            </div>
            <div className="navbar_item">
                <NavLink className="nav-link" aria-current="page" to="projects">Projects</NavLink>
            </div>
            <div className="navbar_item">
                <NavLink className="nav-link" aria-current="page" to="resume">Resume</NavLink>
            </div>
    </header>
  )
};

export default Nav;