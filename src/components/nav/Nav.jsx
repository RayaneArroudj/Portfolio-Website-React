/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareCheck } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activNav, setActivNav] = useState('#');
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActivNav('#')}
        className={activNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActivNav('#about')}
        className={activNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActivNav('#experience')}
        className={activNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActivNav('#services')}
        className={activNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActivNav('#contact')}
        className={activNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareCheck />
      </a>
    </nav>
  );
};

export default Nav;
