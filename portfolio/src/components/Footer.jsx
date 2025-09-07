import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Title */}
        <h2 className="footer-title">Get in Touch</h2>
        <p className="footer-subtitle">I'd love to hear from you! 💬</p>

        {/* Contact Form */}
        <form className="footer-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="4"
            placeholder="Write your message..."
            required
          ></textarea>
          <button type="submit" className="footer-submit">Send</button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} My Portfolio | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
