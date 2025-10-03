import React from "react";
import './Footer.css';
import logo from '../assets/images/mastercard-logo.webp'; 

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="footer-left">
          <img src={logo} alt="Mastercard logo" className="footer-logo" />
          <address className="footer-address">
            2000 Purchase Street<br/>
            Purchase, NY 10577 U.S.A.<br/>
            Telephone: +1.914.249.2000
          </address>

          <div className="social">
            <a aria-label="facebook" href="https://www.facebook.com/Mastercard/" className="social-btn"><i className="fab fa-facebook-f"></i></a>
            <a aria-label="linkedin" href="https://in.linkedin.com/company/mastercard" className="social-btn"><i className="fab fa-linkedin-in"></i></a>
            <a aria-label="instagram" href="https://www.instagram.com/wearemastercard/" className="social-btn"><i className="fab fa-instagram"></i></a>
            <a aria-label="youtube" href="https://www.youtube.com/c/MasterCardWorldwide" className="social-btn"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-columns">
          <nav className="col">
            <h4>Browse jobs</h4>
            <ul>
              <li><a href="https://careers.mastercard.com/us/en/search-results">All jobs</a></li>
              <li><a href="https://careers.mastercard.com/us/en/job-functions">By function</a></li>
              <li><a href="https://careers.mastercard.com/us/en/locations">By location</a></li>
              <li><a href="https://careers.mastercard.com/us/en/talent-programs">By program</a></li>
            </ul>
          </nav>

          <nav className="col">
            <h4>Why Mastercard</h4>
            <ul>
              <li><a href="https://careers.mastercard.com/us/en/life-at-mastercard">Life at Mastercard</a></li>
              <li><a href="https://www.mastercard.com/global/en/vision/who-we-are/community-and-belonging.html">Community and belonging</a></li>
            </ul>
          </nav>

          <nav className="col">
            <h4>Getting hired</h4>
            <ul>
              <li><a href="https://careers.mastercard.com/us/en/mastercards-hiring-process">Our hiring process</a></li>
              <li><a href="https://careers.mastercard.com/us/en/talent-community">Talent community</a></li>
              <li><a href="https://careers.mastercard.com/us/en/interview-tips">Interview tips</a></li>
              <li><a href="https://careers.mastercard.com/us/en/ai-guidelines">AI policy</a></li>
              <li><a href="https://careers.mastercard.com/us/en/events">Events</a></li>
            </ul>
          </nav>

          <nav className="col">
            <h4>Quick links</h4>
            <ul>
              <li><a href="https://mastercard.wd1.myworkdayjobs.com/CorporateCareers/login">Check application status</a></li>
              <li><a href="https://careers.mastercard.com/us/en/fraud-alert">Recruitment fraud</a></li>
              <li><a href="https://careers.mastercard.com/us/en/blog">Blog</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom container">
        <div className="copyright">Copyright © {new Date().getFullYear()} Mastercard</div>
        <div className="footer-utilities">
          <a href="https://www.mastercard.com/global/en/applicant-privacy-notice.html">Privacy Notices</a>
          <span className="pipe">|</span>
          <a href="https://www.mastercard.com/us/en/terms-of-use.html">Terms of Service</a>
          <span className="pipe">|</span>
          <a href="https://careers.mastercard.com/us/en/blog">Site Map</a>
        </div>
      </div>

    </footer>
  );
}
