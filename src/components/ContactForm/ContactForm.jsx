import React from 'react';
import './ContactForm.scss';

export default function CustomerContactForm() {
  return (
    <form action="https://formspree.io/f/mleavwpj" method="POST" className="contact-form">
      <input placeholder="Your username:" type="name" name="username" className="contact-form__input" />
      <input placeholder="Your email:" type="email" name="_replyto" className="contact-form__input" />
      <textarea placeholder="We are listening… " name="message" className="contact-form__input-text" />
      <button type="submit" className="btn--contact">Submit</button>
    </form>
  );
}
