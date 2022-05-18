/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './about.css';
import moi from '../../assets/moi.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderOpened } from 'react-icons/vsc';

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
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>First year of learning</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Professional</h5>
              <small>
                Looking for an intership as my first professional experience
              </small>
            </article>
            <article className="about__card">
              <VscFolderOpened className="about__icon" />
              <h5>Projects</h5>
              <small>
                4 personnals Projects <br />1 real project for a real customer
              </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            iure beatae ducimus laboriosam dolores? Earum vel magnam iusto dolor
            porro inventore tempora. Perspiciatis nam sint exercitationem omnis
            adipisci numquam placeat?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
