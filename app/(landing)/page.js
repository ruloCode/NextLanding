import Service1 from "../../public/assets/service_1.png";
import Service2 from "../../public/assets/service_2.png";
import Service3 from "../../public/assets/service_3.png";
import ContactForm from "@/components/contact-form/ContactForm";
import MaxWidthWrapper from "@/components/max-width-wrapper/MaxWidthWrapper";
import Testimonials from "@/components/testimonials/Testimonials";
import Hero from "@/components/landing/hero/Hero";
import Lectura from "@/components/landing/lectura/Lectura";
import Services from "@/components/landing/services/Services";
import About from "@/components/landing/about/About";
import Consulta from "@/components/landing/consulta/Consulta";

export default async function page() {
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
    <div>
      <Hero />
      <Lectura />
      <Services />
      <Testimonials />
      <About />
      <Consulta />
      <ContactForm />
    </div>
  );
}
