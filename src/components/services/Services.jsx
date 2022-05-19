import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>diagnostic of the customer experience</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Establish a Customer Journey Map</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Functional prototypes</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creation of models</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                User-centered design according to UX rules when creating an user
                interface
              </p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Analysis of customer needs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creation of web and mobile responsive applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creation and management of databases</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SQL queries</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>MVC architecture</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API development and interfacing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>use of frameworks</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Basic web development (HTML5, CSS3, JavaScript and PHP)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Databases with mySQL</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frameworks: Next.js, ExpressJS, Bootstrap, Node.js</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Library: React.js, Leaflet,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>JS tools: Babel, ESLint</p>
            </li>
          </ul>
        </article>
        {/*END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
