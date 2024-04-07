import React from 'react'
import Image from 'next/image'
import Service1 from "../../../public/assets/service_1.png";
import Service2 from "../../../public/assets/service_2.png";
import Service3 from "../../../public/assets/service_3.png";
import {MaxWidthWrapper} from '@/components/max-width-wrapper/MaxWidthWrapper'

export const Services = () => {
    const services = [
        {
          image: Service1,
          title: "Lectura del Tarot",
          description:
            "La Lectura de Tarot es una ventana a tu destino. A través de las cartas, exploramos los misterios de tu vida y te brindamos una guía para tomar decisiones informadas. Descubre las respuestas que necesitas para avanzar con confianza en tu camino espiritual.",
        },
        {
          image: Service2,
          title: "Limpieza Energética",
          description:
            "La Limpieza Energética es un proceso de purificación espiritual. Liberamos tu ser de energías negativas y bloqueos que puedan estar afectando tu bienestar. Te ayudamos a restablecer el equilibrio en tu vida y a sentirte renovado, con energía positiva que fluye libremente.",
        },
        {
          image: Service3,
          title: "Protección Espiritual",
          description:
            "La Protección Espiritual es esencial en este viaje. Fortalecemos tu aura y te brindamos herramientas para mantener influencias negativas a raya. Con nuestra guía, te empoderarás para mantener tu ser resguardado y en armonía, enfrentando los desafíos con valentía.",
        },
      ];
  return (
    <div className="py-12 px-4 bg-cream bg-white">
    <MaxWidthWrapper className="max-w-7xl">
      <h2 className="text-4xl text-center font-bold mb-10">
        Nuestros Servicios
      </h2>
      <div className="grid md:grid-cols-3 items-center  gap-10">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center w-full ">
            <Image
              src={service.image}
              alt={service.title}
              width={300} // These values should be adjusted to your design
              height={200} // These values should be adjusted to your design
              objectFit="cover"
            />
            <h3 className="mt-5 font-semibold text-xl">{service.title}</h3>
            <p className="text-center mt-3">{service.description}</p>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  </div>
  )
}

export default Services