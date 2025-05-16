import React, { FC } from "react";
import TestimonialComponent from "@/components/home-page/TestimonialComponent";
import fourStars from "@/images/home-page/testimonials/four-stars.svg";
import fiveStars from "@/images/home-page/testimonials/five-stars.svg";
import reviewerPhoto from "@/images/home-page/testimonials/reviewer.svg";
const TestimonialsData = [
  {
    src: reviewerPhoto,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    rating: fourStars,
    name: "Alamin Hasan",
    occupation: "Food Specialist",
  },
  {
    src: reviewerPhoto,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    rating: fiveStars,
    name: "John Brown",
    occupation: "Programmer",
  },
  {
    src: reviewerPhoto,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    rating: fiveStars,
    name: "Alan White",
    occupation: "Manager",
  },
  {
    src: reviewerPhoto,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    rating: fourStars,
    name: "David Smith",
    occupation: "Receptionist",
  },
];
const TestimonialsSection: FC = () => {
  return (
    <section className="container flex flex-col items-center">
      <p className="text-amberOrange font-vibes text-[32px]">Festimonials</p>
      <h1 className="font-bold text-white leading-none text-[48px] ">
        <span className="text-amberOrange">Wh</span>at our client are saying
      </h1>

      {TestimonialsData.map((testimonial, index) => (
        <TestimonialComponent
          key={index}
          reviewerSrc={testimonial.src}
          responseText={testimonial.text}
          reviewerName={testimonial.name}
          ratingStars={testimonial.rating}
          reviewerOccupation={testimonial.occupation}
        />
      ))}
    </section>
  );
};

export default TestimonialsSection;
