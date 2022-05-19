import React from 'react';
import './portfolio.css';
import portfolio1 from '../../assets/portfolio1.jpg';
import portfolio2 from '../../assets/portfolio2.jpg';
import portfolio3 from '../../assets/portfolio3.jpg';
import portfolio4 from '../../assets/portfolio4.jpg';
import portfolio5 from '../../assets/portfolio5.png';
import portfolio6 from '../../assets/portfolio6.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn">
            GitHub
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn">
            GitHub
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn">
            GitHub
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn">
            GitHub
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn">
            GitHub
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn">
            GitHub
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
