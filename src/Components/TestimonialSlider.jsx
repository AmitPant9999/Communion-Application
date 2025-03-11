import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./TestimonialSlider.css";

const testimonialsData = [
  {
    image: "user-1.avif",
    name: "Michel D Korolenko",
    title:'chuch',
    quote: (
      <>
        <p>
          Communion's events feature has made it easy to organize and
          participate in meaningful spiritual gatherings.
        </p>
      </>
    ),
  },
  {
    image: "user-2.avif",
    name: "Jane Doe",
    title:'social worker',
    quote: (
      <>
        <p>
          I am incredibly pleased with NolanAI for scriptwriting—so much so that
          I’m recommending it to my college scriptwriting class.
        </p>
      </>
    ),
  },
 
];

const TestimonialSlider = () => {
  return (
    <div className="testimonial-slider-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="testimonial-swiper"
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="flex flex-row items-center gap-10">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div className="testimonial-text">
                <h2 className="testimonial-name">{testimonial.name}</h2>
                {testimonial.title && (
                  <p className="testimonial-title">{testimonial.title}</p>
                )}
                <div className="testimonial-quote space-y-3">
                  {testimonial.quote}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
