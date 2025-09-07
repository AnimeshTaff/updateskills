// import React from "react";
// import "./Home.css"; 


// function Contact() {
//   return (
//     <div className="contact-container">
//       <h1 className="contact-title">Contact Me</h1>
//       <p className="contact-subtitle">
//         Have a question or want to work together? Fill out the form below 👇
//       </p>

//       <form className="contact-form">
//         {/* Name */}
//         <div className="form-group">
//           <label htmlFor="name">Your Name</label>
//           <input type="text" id="name" name="name" placeholder="Enter your name" required />
//         </div>

//         {/* Subject */}
//         <div className="form-group">
//           <label htmlFor="subject">Subject</label>
//           <input type="text" id="subject" name="subject" placeholder="Enter subject" required />
//         </div>

//         {/* Message */}
//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea id="message" name="message" placeholder="Write your message..." rows="6" required />
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="submit-btn">Send Message</button>
//       </form>
//     </div>
//   );
// }

// export default Contact;
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Home.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tyyxrao",   // from EmailJS dashboard
        "template_8mxx33u",  // from EmailJS dashboard
        form.current,
        "x-x_AvmyTDqnUNrd7"    // from EmailJS dashboard
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
        },
        (error) => {
          alert("Something went wrong ❌: " + error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-subtitle">
        Have a question or want to work together? Fill out the form below 👇
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="user_name" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="user_subject" placeholder="Enter subject" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Write your message..." rows="6" required />
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

