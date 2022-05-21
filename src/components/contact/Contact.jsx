import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_boaynib',
        'template_pdye1hz',
        form.current,
        'zN21Ae8HxxkyzKwgi'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="article contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rayane.arroudj@gmail.com</h5>
            <a href="mailto:rayane.arroudj@gmail.com">Send a message</a>
          </article>
          <article className="article contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Rayane Arroudj</h5>
            <a
              href="https://www.linkedin.com/in/rayane-arroudj-13b351a9/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="article contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>06.51.10.29.33</h5>
            <a
              href="https://api.whatsapp.com/send?phone+33651102933"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="You name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
