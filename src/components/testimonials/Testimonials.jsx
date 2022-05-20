import React from 'react';
import './testimonials.css';
import avatar1 from '../../assets/avatars/avatar1.jpg';
import avatar2 from '../../assets/avatars/avatar2.jpg';
import avatar3 from '../../assets/avatars/avatar3.jpg';
import avatar4 from '../../assets/avatars/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Célia Röttger',
    review:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid corrupti iure vitae fugit atque assumenda unde, fugiat officiis eafuga saepe! Facilis necessitatibus modi magnam dolorem! Error sitpossimus quisquam.',
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'Ashlee Curry',
    review:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid corrupti iure vitae fugit atque assumenda unde, fugiat officiis eafuga saepe! Facilis necessitatibus modi magnam dolorem! Error sitpossimus quisquam.',
  },
  {
    id: 3,
    avatar: avatar3,
    name: 'Simon Durant',
    review:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid corrupti iure vitae fugit atque assumenda unde, fugiat officiis eafuga saepe! Facilis necessitatibus modi magnam dolorem! Error sitpossimus quisquam.',
  },
  {
    id: 4,
    avatar: avatar4,
    name: 'Rayane Bourach',
    review:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid corrupti iure vitae fugit atque assumenda unde, fugiat officiis eafuga saepe! Facilis necessitatibus modi magnam dolorem! Error sitpossimus quisquam.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
