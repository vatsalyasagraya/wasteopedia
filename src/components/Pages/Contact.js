import React from "react";
import "./contact.css"

export const Contact = () => {
  return (
    <div id="Contact" className="contact">
      <a href="mailto:kuldeep.er@gmail.com?body=Write%20your%20query%20here..."  className="btn">Contact Us</a>
      <div className="footer">
        <p className="p1">Copyright © 2023</p>
        <a href="/" className="p2">linkedin</a>
        <a href="mailto:kuldeep.er@gmail.com"  className="p3">Mail: kuldeep.er@gmail.com</a>
      </div>
    </div>
  );
};

export default Contact;