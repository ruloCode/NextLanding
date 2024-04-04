import Image from "next/image";
import React from "react";





export const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col gap-8 border border-indigo-100 p-4 rounded-md h-[270px]">
      <div className="flex gap-4 justify-start items-center">
        <Image
          className="rounded-full"
          src={testimonial.avatar}
          alt={testimonial.name}
          width={60}
          height={60}
        />
        <h3 className="bold">{testimonial.name}</h3>
      </div>
      <div>
        <p>{testimonial.content}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
