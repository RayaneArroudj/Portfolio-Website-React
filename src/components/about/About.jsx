/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './about.css';
import moi from '../../assets/moi.jpeg';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={moi} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h5>Experience</h5>
              <small>First year of learning</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
