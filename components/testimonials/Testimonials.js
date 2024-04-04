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
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    id: "01",
    avatar: Testimonio1,
    name: "Amore Amore",
    content:
      "“Recibi mi pedido en perfectas condiciones tenía miedo de que fuera algún fraude pero no fue asi. siempre estuvieron en contacto conmigo muy amables para atender mis dudas de primera compra, seguiré pidiendo y tienen siempre algún descuento que puedo aprovechar”",
    plataform: "Facebook",
    url: "https://maps.app.goo.gl/nwRb6MySCjXTZcdHA",
  },
  {
    id: "02",
    avatar: Testimonio1,
    name: "Amore Amore",
    content:
      "“Recibi mi pedido en perfectas condiciones tenía miedo de que fuera algún fraude pero no fue asi. siempre estuvieron en contacto conmigo muy amables para atender mis dudas de primera compra, seguiré pidiendo y tienen siempre algún descuento que puedo aprovechar”",
    plataform: "Facebook",
    url: "https://maps.app.goo.gl/nwRb6MySCjXTZcdHA",
  },
  {
    id: "03",
    avatar: Testimonio1,
    name: "Amore Amore",
    content:
      "“Recibi mi pedido en perfectas condiciones tenía miedo de que fuera algún fraude pero no fue asi. siempre estuvieron en contacto conmigo muy amables para atender mis dudas de primera compra, seguiré pidiendo y tienen siempre algún descuento que puedo aprovechar”",
    plataform: "Facebook",
    url: "https://maps.app.goo.gl/nwRb6MySCjXTZcdHA",
  },
];

export const Testimonials = () => {
  return (
    <MaxWidthWrapper className="max-w-7xl">
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
  );
};

export default Testimonials;
