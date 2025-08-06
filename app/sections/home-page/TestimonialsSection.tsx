import React, { FC } from "react";
import TestimonialComponent from "@/components/home-page/TestimonialComponent";
import { Carousel } from "flowbite-react";

import FourStars from "@/images/home-page/testimonials/four-stars.svg";
import FiveStars from "@/images/home-page/testimonials/five-stars.svg";
import ReviewerPhoto from "@/images/home-page/testimonials/reviewer.svg";

const TestimonialsData = [
  {
    src: ReviewerPhoto,
    text: "Oasis turned an ordinary dinner into an unforgettable experience! The flavors were rich, the ingredients fresh, and the service absolutely amazing",
    rating: FourStars,
    name: "Alamin Hasan",
    occupation: "Food Specialist",
  },
  {
    src: ReviewerPhoto,
    text: "Incredible taste and excellent presentation! Oasis really knows how to make dining a delightful experience. Highly recommended!",
    rating: FiveStars,
    name: "John Brown",
    occupation: "Programmer",
  },
  {
    src: ReviewerPhoto,
    text: "Fantastic service and delicious meals. From appetizers to dessert, everything was cooked to perfection. Will definitely come back soon!",
    rating: FiveStars,
    name: "Alan White",
    occupation: "Manager",
  },
  {
    src: ReviewerPhoto,
    text: "The best restaurant I’ve visited this year! Every dish was a masterpiece, and the cozy atmosphere made me feel at home",
    rating: FourStars,
    name: "David Smith",
    occupation: "Receptionist",
  },
];
const TestimonialsSection: FC = () => {
  return (
    <section className="container flex flex-col items-center justify-center my-[50px] space-y-[15px] lg:my-[70px] lg:space-y-[30px]">
      <p className="text-amberOrange font-vibes text-[32px]">Festimonials</p>
      <h1 className="font-bold text-white leading-none text-[42px] text-center lg:text-[60px]">
        <span className="text-amberOrange">Wh</span>at our client are saying
      </h1>

      <div className="w-full">
        <Carousel slide={false} indicators={true} draggable>
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
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
