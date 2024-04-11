import MaxWidthWrapper from "../max-width-wrapper/MaxWidthWrapper";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Testimonio1 from "../../public/assets/testimonio_1.png";
import Testimonio2 from "../../public/assets/testimonio_2.png";
import Testimonio3 from "../../public/assets/testimonio_3.png";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    id: "01",
    avatar: Testimonio1,
    name: "Martin Rivera",
    content:
      "“Vivo en Houston, gracias a Mundo Espiritual, por cambiar mi mala suerte, mi vida cambió gracias a su ayuda”",
    plataform: "Facebook",
    url: "https://maps.app.goo.gl/nwRb6MySCjXTZcdHA",
  },
  {
    id: "02",
    avatar: Testimonio2,
    name: "José Mendoza",
    content:
      "“Una persona estaba intentando separarme de mi familia con maldad, Mundo Espiritual me ayudó a recuperarla”",
    plataform: "Facebook",
    url: "https://maps.app.goo.gl/nwRb6MySCjXTZcdHA",
  },
  {
    id: "03",
    avatar: Testimonio3,
    name: "Ana Alfaro",
    content:
      "“Recuperé a mi esposo, el amor volvió a nuestra vida gracias a Mundo Espiritual.”",
    plataform: "Facebook",
    url: "https://maps.app.goo.gl/nwRb6MySCjXTZcdHA",
  },
];

export const Testimonials = () => {
  return (
    <div className="w-full flex justify-center bg-white">
      <MaxWidthWrapper className="max-w-7xl ">
        <section className="py-8  h-96  flex align-center justify-center flex-col w-full">
          <h3 className="text-[#002f4b] text-2xl font-bold mb-4 text-center">
            Lo que nuesrtos clientes piensan de nosotros
          </h3>
          <Carousel>
            <CarouselContent>
              {testimonialsData.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3 relative"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="hidden md:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default Testimonials;
