import Image from "next/image";
import Service1 from "../public/assets/service_1.png";
import Service2 from "../public/assets/service_2.png";
import Service3 from "../public/assets/service_3.png";
import ContactForm from "@/components/contact-form/ContactForm";
import MaxWidthWrapper from "@/components/max-width-wrapper/MaxWidthWrapper";
import Testimonials from "@/components/testimonials/Testimonials";

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
      <div className="flex min-h-screen flex-col items-center justify-center bg-navy bg-[url('../public/assets/hero_bg.png')] bg-no-repeat bg-cover p-4 text-white ">
        <h1 className="text-4xl font-bold">Remedio Para Ese Mal De Amor</h1>
        <p className="text-2xl mt-2">
          NO Se Merece Sufrir, Recupere Su Pareja Si Le Dejo!
        </p>
        <p className="text-xl mt-2">
          CURO SU MAL DE AMORES, OBTENGA SU REMEDIO RAPIDAMENTE Y RECUPERE SU
          PAREJA CON MI AYUDA Y MI TRABAJO.
        </p>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#11181F]  p-4 text-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          ¿SUFRE DE DEPRESION, Mal De Amor Y Lleva Varias Noches Sin Dormir?
        </h2>
        <p className="text-lg md:text-xl mt-4 text-center">
          PIDA SU CONSULTA AHORA
        </p>
        <p className="text-md md:text-lg mt-2 text-center">
          YO LE TENGO LA SOLUCION CON HECHOS
        </p>
        <button className="mt-6 px-6 py-2 border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-dark-blue transition duration-300">
          Lectura del Tarot
        </button>
      </div>
      <div className="py-12 px-4 bg-cream">
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
      <Testimonials />

      <div className="relative bg-navy bg-[url('../public/assets/bg_2.png')] bg-no-repeat bg-cover flex justify-center w-full">
        <div className="flex justify-center mx-auto px-4 py-16">
          <div className="max-w-3xl ml-auto bg-white bg-opacity-90 p-8 text-center">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
              Un mensaje de nuestro fundador:
            </p>
            <h2 className="text-4xl font-semibold mb-4">
              Cambia Tu Vida Con Nosotros
            </h2>
            <p className="mb-6">
              Mi nombre es Isaías Mancini, mi misión es proporcionar confianza y
              seguridad en áreas donde la espiritualidad es a menudo
              malentendida. Cada día, me sumerjo en el mundo espiritual,
              aprendiendo y creciendo a través de rituales, música, medicina,
              estudios religiosos y ceremonias. Mi compromiso radica en la
              creencia de que la humanidad puede experimentar un cambio
              significativo cuando nos hacemos conscientes de la conciencia
              cristica que reside en cada uno de nosotros. Agradezco las
              numerosas bendiciones en mi camino y deseo compartirlas contigo.
            </p>
            <p className="font-bold">Gracias, Muchas Bendiciones.</p>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center bg-[#11181F]  p-4 text-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Reserva Tu Consulta .
        </h2>
        <p className="text-lg md:text-xl mt-4 text-center">
          Atención Inmediata y Personalizada a un Clic de Distancia.
        </p>

        <button className="mt-6 px-6 py-2 border-2  border-blue-500 text-blue-500 font-semibold uppercase tracking-wider hover:bg-white hover:text-dark-blue transition duration-300">
          Reserva aquí
        </button>
      </div>

      <ContactForm />
    </div>
  );
}
