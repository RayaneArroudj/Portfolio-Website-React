import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { DiReact } from 'react-icons/di';
import { SiNextdotjs } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { SiMysql } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';
import { SiTailwindcss } from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import { BsGithub } from 'react-icons/bs';
import { SiSwiper } from 'react-icons/si';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Technical Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <AiFillHtml5 className="experience__details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <DiCss3 className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <SiJavascript className="experience__details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <DiReact className="experience__details-icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Interdmediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <SiNextdotjs className="experience__details-icons" />
              <div>
                <h4>Next.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/*END OF FRONTEND*/}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <IoLogoNodejs className="experience__details-icons" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <SiMysql className="experience__details-icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>API REST</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/*END OF BACKEND*/}

        <div className="experience__softskills">
          <div>
            <h3>Soft Skills</h3>
          </div>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Team Work</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Continuous learning</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Communication skills</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Empathy</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Sales pitch</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Work under pression</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>rigor and organization</h4>
              </div>
            </article>
          </div>
        </div>
        {/*END OF BACKEND*/}
        <div className="experience__otherskills">
          <h3>Others</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <FiFigma className="experience__details-icons" />
              <div>
                <h4>Figma</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <SiTailwindcss className="experience__details-icons" />
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React-Icons</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <DiGit className="experience__details-icons" />
              <div>
                <h4>Git</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <BsGithub className="experience__details-icons" />
              <div>
                <h4>GitHub</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>AGILE Method (SCRUM)</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <SiSwiper />
              <div>
                <h4>Swiper JS</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
