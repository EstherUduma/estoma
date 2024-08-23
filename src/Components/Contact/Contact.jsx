import React, { useState } from 'react';
import './contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
    // Optionally clear the form data
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id='contact' className="contactFormSection">
      <div className="contactFormBox">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contactForm">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;