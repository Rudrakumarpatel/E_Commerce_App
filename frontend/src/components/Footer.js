// Footer.js

import React from 'react';
import './Footer.css'; // Import CSS for styling (optional)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are a company dedicated to providing the best products and services. Our mission is to enhance the lives of our customers through innovative solutions.
          </p>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-phone"></i> +91 9054542267
          </p>
          <p>
            <i className="fas fa-envelope"><a href="mailto:rudrapatel2992003@gmail.com">rudrapatel2992003@gmail.com</a></i>
          </p>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com/people/Rudra-Patel/pfbid0AHEbtnHTyQnJenUg8gZuTHrXwqk1WpeJVzR4H6kDnvPaa6m2huzeRzropWWfhrs3l/"><i className="fab fa-facebook"></i> Facebook</a>
          <a href="https://www.linkedin.com/in/rudrakumardp1/"><i className="fab fa-linkedin"></i> LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 PulsePlaza. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
