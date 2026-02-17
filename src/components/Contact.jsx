import "./Contact.css";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMail = () => {
    const subject = `Message from ${form.name}`;
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;

    window.location.href = `mailto:km3974808@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-cont" id="contact">

      {/* LEFT SIDE */}
      <div className="contact-first">
        <h1 id="slogo">
          Let's Build Something <br /> Amazing Together
        </h1>

        <p className="desc">
          Have a project in mind or just want to connect? Reach out and let's
          start a conversation about bringing your ideas to life!
        </p>
      </div>


     
      <div className="contact-bottom">
       <div className="contact-info">
        <h1 className="touch-title" >Get In Touch</h1>

        <p>
          Whether you have a project that needs development expertise or just
          want to connect, I'm always open to discussing new opportunities and
          ideas.
        </p>

        <hr />

        <div className="info-line">
          <i className="fa-solid fa-envelope"></i>
          <p style={{display:"inline"}}>Email : km3974808@gmail.com</p>
        </div>

        <hr />

        <div className="info-line">
          <i className="fa-solid fa-location-dot"></i>
          <p style={{display:"inline"}}>Location : Salem, TamilNadu, India</p>
        </div>

        <hr />

        <div className="info-line">
          <i className="fa-solid fa-circle-info"></i>
          <p style={{display:"inline"}}>Availability: Open to freelance and full-time opportunities</p>
        </div>
      </div>


      {/* RIGHT SIDE FORM */}
      <div className="contact-form">

        <h2>Send Me a Message</h2>

        <div className="input-group">
          <i className="fa-solid fa-user"></i>
          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <i className="fa-solid fa-envelope"></i>
          <input
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
          />
        </div>

        <div className="input-group textarea">
          <i className="fa-solid fa-message"></i>
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
          />
        </div>

        <button className="send-btn" onClick={sendMail}>
          SEND MESSAGE
        </button>

        <p className="connect">Connect with me</p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/karthikeyan-m-ba49252a4/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>

          <a href="https://www.instagram.com/its_karthi_119/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>

          <a href="https://github.com/Karthikeyan1814" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>

      </div>
      </div>
      <div className="footer">
  <p>© 2026. All rights reserved.</p>

  <p>
    Designed by 
    <span className="footer-link"> Karthikeyan Web Developer and Designer </span> 
  </p>
</div>

    </div>
  );
}
