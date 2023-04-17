import React from "react";
import "./contact.css"

export const Contact = () => {
  return (
    <div id="Contact" className="contact">
      <a href="mailto:info@saalve.in?body=Write%20your%20query%20here..." target="_blank" rel="noopener noreferrer" className="btn">Contact Us</a>
      <div className="footer">
        <p className="p1">Copyright © 2023</p>
        <a href="tel:+91 8218870810" className="p2">Contact : +91 8218870810</a>
        <a href="mailto:info@saalve.in" target="_blank" rel="noopener noreferrer" className="p3">Mail :  info@saalve.in</a>
      </div>
    </div>
  );
};

export default Contact;
