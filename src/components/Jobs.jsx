import React from "react";
import img1 from '../assets/images/image.jpg'; 

function Jobs(){
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">

        <div className="work-list">
          
          <article className="work card">
            <div className="card-media">
              <img src={img1} alt="Google Page preview" />
            </div>

            <div className="card-body">
              <h3 className="card-title">Unlock your potential</h3>
              <p className="card-desc">
                Explore a wide range of opportunities across Mastercard to unlock your potential.
              </p>

              <a className="card-link" href="https://careers.mastercard.com/us/en/search-results" target="_blank" rel="noreferrer">
                Search jobs <span className="chev">›</span>
              </a>
            </div>
          </article>

          <article className="work card">
            <div className="card-media">
              <img src={img1} alt="Project preview" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Our hiring process</h3>
              <p className="card-desc">
                Learn what to expect during our recruitment process.
              </p>
              <a className="card-link" href="https://careers.mastercard.com/us/en/mastercards-hiring-process" target="_blank" rel="noreferrer">
                Learn about our hiring process  <span className="chev">›</span>
              </a>
            </div>
          </article>

          <article className="work card">
            <div className="card-media">
              <img src={img1} alt="Project preview" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Benefits and rewards</h3>
              <p className="card-desc">
                We are committed to supporting the health, wellbeing, and growth of our global workforce.   
              </p>
              <a className="card-link" href="https://careers.mastercard.com/us/en/life-at-mastercard" target="_blank" rel="noreferrer">
                Explore employee benefits  <span className="chev">›</span>
              </a>
            </div>
          </article>

          <article className="work card">
            <div className="card-media">
              <img src={img1} alt="Project preview" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Connect with us</h3>
              <p className="card-desc">
                Join our talent community to receive updates about new opportunities.
              </p>
              <a className="card-link" href="https://careers.mastercard.com/us/en/talent-community" target="_blank" rel="noreferrer">
                Join the talent community  <span className="chev">›</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Jobs;
