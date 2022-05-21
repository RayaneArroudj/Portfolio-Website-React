import React from 'react';
import './portfolio.css';
import youme from '../../assets/youme.png';
import nanar from '../../assets/nanar.png';
import portfolio3 from '../../assets/portfolio3.jpg';
import portfolio4 from '../../assets/portfolio4.jpg';
import portfolio5 from '../../assets/portfolio5.png';
import portfolio6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: youme,
    title: 'Compatibility application',
    github: 'https://github.com/RayaneArroudj/You-Me',
    demo: 'https://u-n-me.netlify.app/themechoice',
  },
  {
    id: 2,
    image: nanar,
    title: 'FILMSclaqués.com',
    github: 'https://github.com/RayaneArroudj/lyon-react-mars22-p2g2',
    demo: 'https://films-claques.vercel.app/',
  },
  {
    id: 3,
    image: portfolio3,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 4,
    image: portfolio4,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 5,
    image: portfolio5,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 6,
    image: portfolio6,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
