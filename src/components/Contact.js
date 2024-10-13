// src/components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>Raj Marketing | Raj Agency</p>
        <p>27, Godown Street, 3rd Floor, Chennai – 600001</p>
        <p>Email: chennairajmarketing@gmail.com</p>
        <p>Phone: +91 98848 53354</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your NameRaj " required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;