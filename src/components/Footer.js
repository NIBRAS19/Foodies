import React from "react";
import './Footer.scss'; // Assuming you'll store the CSS in Footer.css

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section about-us">
          <h3>About Us</h3>
          <p>
            Welcome to our luxury hotel and restaurant, where we offer the finest
            dining experiences and world-class hospitality. We are dedicated to
            providing unforgettable moments for all our guests.
          </p>
          <div className="social-icons">
            <a href="#" target="_blank" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Book a Room</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Gallery</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p><i className="fas fa-phone-alt"></i> +123 456 7890</p>
          <p><i className="fas fa-envelope"></i> info@hotelrestaurant.com</p>
          <p><i className="fas fa-map-marker-alt"></i> 123 Street, City, Country</p>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates and special offers.</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Hotel & Food, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
