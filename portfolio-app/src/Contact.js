import React, { useState } from "react";
// import ContactIcons from "./Icons/ContactIcons.js";


const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:4000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="wrapper">
      <div className="main">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" required />
          </div>
          <button type="submit">{status}</button>
        </form>
      </div>
    </div>
  );
};

function Contact () {
  return (
    <div className="wrapper">
      <div className="main">
        <div>
          <h2><span>
            contact
          </span></h2>
          <div>
              I would love to hear from you. Please feel free to get in touch.
          </div>
          <br></br>
          <table>
                <thead>
                    <tr>
                        <th className="contact-icon">
                          <a href="https://gitlab.com/emily.ostrove"><i className="fa-brands fa-github fa-lg"></i></a>  
                        </th>
                        <th className="contact-icon">
                          <a href="mailto:emily.ostrove@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                        </th>
                        <th className="contact-icon">
                          <a href="https://www.linkedin.com/in/emily-ostrove/"><i className="fa-brands fa-linkedin-in"></i></a>
                        </th>
                        <th className="contact-icon">
                          <i className="fa-solid fa-phone"></i> 206.227.9313
                        </th>
                    </tr>
                </thead>
            </table>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}



export default Contact;