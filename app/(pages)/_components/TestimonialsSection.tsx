import React, { FC } from "react";
import TestimonialComponent from "@/components/home-page/TestimonialComponent";
import { Carousel } from "flowbite-react";

import { FourStars, FiveStars, ReviewerPhoto } from "@/public/home-page/testimonials";

const TestimonialsData = [
  {
    src: ReviewerPhoto,
    text: "Oasis перетворив звичайну вечерю на незабутній досвід! Смаки були насиченими, інгредієнти — свіжими, а сервіс просто неймовірний.",
    rating: FourStars,
    name: "Alamin Hasan",
    occupation: "Фуд-експерт",
  },
  {
    src: ReviewerPhoto,
    text: "Неймовірний смак і чудова подача! В Oasis точно знають, як зробити відвідування ресторану справжнім задоволенням. Щиро рекомендую!",
    rating: FiveStars,
    name: "John Brown",
    occupation: "Програміст",
  },
  {
    src: ReviewerPhoto,
    text: "Найкращий ресторан, який я відвідував цього року! Кожна страва — справжній шедевр, а затишна атмосфера змушує почуватися як удома.",
    rating: FiveStars,
    name: "Alan White",
    occupation: "Адміністратор рецепції",
  },
  {
    src: ReviewerPhoto,
    text: "Чудовий сервіс і дуже смачні страви. Від закусок до десертів — усе було приготовано ідеально. Обов’язково повернуся знову!",
    rating: FourStars,
    name: "David Smith",
    occupation: "Менеджер",
  },
];
const TestimonialsSection: FC = () => {
  return (
    <section className="container flex flex-col items-center justify-center my-[50px] space-y-[15px] lg:my-[70px] lg:space-y-[30px]">
      <p className="text-amberOrange font-vibes text-[32px]">Відгуки</p>
      <h1 className="font-bold text-white leading-none text-[42px] text-center lg:text-[60px]">
        <span className="text-amberOrange">Що </span>наші клієнти говорять про
        нас
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
