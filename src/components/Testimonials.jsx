'use client'
// Testimonials.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Navigation module styles
import 'swiper/css/pagination'; // Pagination module styles
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import quote from '@/images/quote.svg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Kamal',
      feedback: "My life would have been a nightmare if I hadn't met you. Everything that I have learnt about autism is from you.I feel so much relieved because I now know how to help my child. Thank you mam,foreverything. You are very precious."
    },
    {
      name: 'Kamal',
      feedback: "My life would have been a nightmare if I hadn't met you. Everything that I have learnt about autism is from you.I feel so much relieved because I now know how to help my child. Thank you mam,foreverything. You are very precious.",
    },
    {
      name: 'Kamal',
      feedback: "My life would have been a nightmare if I hadn't met you. Everything that I have learnt about autism is from you.I feel so much relieved because I now know how to help my child. Thank you mam,foreverything. You are very precious.",
    },
  ];

  return (
    <section className="testimonials-sec sec">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className='sec-head text-center mb-5'>Trusted by 25,000 families and parents like you</h2>
                    <Swiper
                    className='test-swiper'
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        // navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-card">
                                <Image src={quote} alt="" />
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.feedback}</p>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Testimonials;
