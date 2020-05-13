import React from "react";
import portfolios from "../portfolios.json";

function Portfolio() {
  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">
            Find a sample of my work below
          </h3>
        </div>
        <div className="row">
          {portfolios.map(portfolio => {
            return (
              <div className="col-lg-4 col-sm-6 mb-4" key={portfolio.href}>
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-toggle="modal"
                    href={portfolio.href}
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-plus fa-3x" />
                      </div>
                    </div>
                    <img
                      className="img-fluid"
                      src={portfolio.coverimage}
                      alt={portfolio.alt}
                    />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">
                      {portfolio.title}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
