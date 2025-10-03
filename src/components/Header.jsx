import React from "react";
import "./Header.css";
import logo from "../assets/images/mastercard-logo.webp"; 

export default function Header() {
  return (
    <header className="site-header">
      <div className="top-bar container">
        <div className="top-left">
          <a className="brand" href="/">
            <img src={logo} alt="Mastercard" />
          </a>
        </div>

        <div className="top-center">
          <input className="search-pill" placeholder="Search job title" />
          <input className="search-pill" placeholder="Search Location" />
          <button className="search-btn">Search</button>
        </div>

        <div className="top-right">
          <button className="saved-jobs">
            <span className="heart">♡</span> Saved jobs (0)
          </button>
        </div>
      </div>

      <nav className="nav-row">
        <div className="container nav-inner">
          <ul className="main-nav">
 <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Browse jobs
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://careers.mastercard.com/us/en/search-results">All jobs</a></li>
            <li><a class="dropdown-item" href="https://careers.mastercard.com/us/en/search-results">Artificial Intelligence</a></li>
            <li><a class="dropdown-item" href="https://careers.mastercard.com/us/en/search-results">Consulting</a></li>
          </ul>
        </li>           
        
 <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About us
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://careers.mastercard.com/us/en/life-at-mastercard">Life at masterclass</a></li>
            <li><a class="dropdown-item" href="https://careers.mastercard.com/us/en/life-at-mastercard">Community</a></li>
            <li><a class="dropdown-item" href="https://careers.mastercard.com/us/en/life-at-mastercard">Location</a></li>
          </ul>
        </li>          
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Students
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://careers.mastercard.com/us/en/students">Opportunities</a></li>
            <li><a class="dropdown-item" href="https://careers.mastercard.com/us/en/students">Interships</a></li>
            <li><a class="dropdown-item" href="https://careers.mastercard.com/us/en/students">Jobs</a></li>
          </ul>
        </li>  <li>Blog</li>
            <li>Talent community</li>
          </ul>
        </div>
      </nav>
      
    </header>
  );
}
