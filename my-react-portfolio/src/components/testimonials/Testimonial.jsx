import './testimonial.css';

import AVATAR1 from '../../assets/avatar1.jpg';
import AVATAR2 from '../../assets/avatar2.jpg';
import AVATAR3 from '../../assets/avatar3.jpg';
import AVATAR4 from '../../assets/avatar4.jpg';
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const data = [
    {
        avatar: AVATAR1,
        name: 'Mikaela',
        review: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
    },
    {
        avatar: AVATAR2,
        name: 'Rio Sway',
        review: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
    },
    {
        avatar: AVATAR3,
        name: 'Tucker Fayne',
        review: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
    },
    {
        avatar: AVATAR4,
        name: 'Anissa',
        review: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
    }
];

function Testimonials() {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper 
                className='container testimonials__container'
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({avatar, name, review}, index) =>{
                        return(
                            <SwiperSlide key={index} className='testimonial'>
                                <div className='client__avatar'>
                                    <img src={avatar} alt={avatar}/>
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
}

export default Testimonials;
