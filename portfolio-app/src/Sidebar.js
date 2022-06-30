import React from "react";
import './css/App.css';
import './css/intro.css';
import emily2 from './css/images/emily_crop.png';

function Sidebar() {
    return (
        <section className="sidebar">
            <section className="intro">
                <img className="headshot center" src={emily2} alt="" />
                <h1>Emily Ostrove</h1>
            </section>
            <section className="blurb">
                <div className="blurb-h2">
                    About
                </div>
                <div className="intro-details">
                    I am a software developer with a passion for learning. 
                    I spent the past 5 years at Amazon working in e-commerce, 
                    where I was surround by tech, but not literate in the technology. 
                    I finally decided to take the plunge and learn how to code and 
                    haven't looked back since. I'm beyond excited to take the next step
                    in my tech career as a Software Developer.
                </div>
            </section>
            <br></br>
            <table>
                <thead>
                    <tr>
                        <th className="contact-icon">
                            <a href="https://gitlab.com/emily.ostrove"><i className="fa-brands fa-github"></i></a>  
                        </th>
                        <th className="contact-icon">
                            <a href="mailto:emily.ostrove@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                        </th>
                        <th className="contact-icon">
                            <a href="https://www.linkedin.com/in/emily-ostrove/"><i className="fa-brands fa-linkedin-in"></i></a>
                        </th>
                    </tr>
                </thead>
            </table>
        </section>
    )
};

export default Sidebar;