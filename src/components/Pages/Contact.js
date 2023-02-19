import React from "react";
import "./contact.css"

export const Contact = () => {
  return (
    <div id="Contact" className="contact">
      <a href="mailto:saalve.1801@gmail.com?body=Write%20your%20query%20here..." target="_blank" rel="noopener noreferrer" className="btn">Contact Us</a>
      <div className="footer">
        <p className="p1">Copyright © 2023</p>
        <a href="tel:+91 8218870810" className="p2">Contact : +91 8218870810</a>
        <a href="mailto:saalve.1801@gmail.com" target="_blank" rel="noopener noreferrer" className="p3">Mail :  saalve.1801@gmail.com</a>
      </div>
    </div>
  );
};

export default Contact;