import React from 'react';
import '../index.css'; // Import your custom CSS file

export const Contact = () => {
    return (
        <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-form-container"> {/* Added container */}
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
  
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
  
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
  
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
  );
};