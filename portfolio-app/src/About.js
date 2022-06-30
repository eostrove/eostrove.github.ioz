import React from "react";
import './css/about.css';

function About() {
    return (
        <div className="wrapper">
            <div className="main">
            <h2><span>
                About
            </span></h2>
                <div className="about-content">
                    important things about Emily. What happens when I add more content.
                </div>
                <div className="about-subcontent">I enjoy
                </div>
                <ul className="about-content">
                    <li>trying out new recipes</li>
                    <li>swimming in alpine lakes</li>
                    <li>latin dance, specifically salsa and bachata</li>
                    <li>the smell right after it stops raining</li>
                    <li>tea with a cookie</li>
                    <li>cat memes</li>
                    <li>SciFi series (Battlestar Galactica and StarTrek are my favorites)</li>
                    <li>hiking</li>
                </ul>
            </div>
        </div>
    )
};

export default About;