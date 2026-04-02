import React from "react";


const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p className="contact-intro">
        We are here to help you. Reach out to us for appointments, inquiries, or
        any assistance related to our hospital services.
      </p>

      <div className="contact-grid">
        {/* ===== CONTACT DETAILS ===== */}
        <div className="contact-info">
          <h3>Hospital Address</h3>
          <p>
            City Care Hospital<br />
            123 Health Avenue,<br />
            Hyderabad, Telangana – 500001
          </p>

          <h3>Phone</h3>
          <p>+91 98765 43210</p>

          <h3>Email</h3>
          <p>contact@citycarehospital.com</p>

          <h3>Working Hours</h3>
          <p>
            Monday – Saturday: 8:00 AM – 8:00 PM <br />
            Emergency Services: 24/7
          </p>
        </div>

        {/* ===== CONTACT FORM ===== */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;