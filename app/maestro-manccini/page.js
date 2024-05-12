import Maestro from "@/components/landing/maestro/Maestro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import MaxWidthWrapper from "@/components/max-width-wrapper/MaxWidthWrapper";

export default async function page() {
  return (
    <div>
      <Maestro />
      <MaxWidthWrapper className={"max-w-7xl py-8"}>
        <div className="max-w-2xl mx-auto p-5">
          <h1 className="text-3xl font-bold mb-4">Soy Isaías Manccini</h1>
          <p className="mb-3">
          Soy un Coach Espiritual, Parapsicólogo, y Tarotista con experiencia en medios de comunicación, incluida la radio en Houston. Bienvenido a Mundo Espiritual, un lugar de amor y gratitud.
          </p>
          <p className="mb-3">
          Mi misión es ayudarte en tu camino espiritual, guiándote y utilizando mi don de canalizar mensajes a través del tarot para responder tus preguntas, interpretar tus sueños y liberarte de bloqueos. Trabajo para brindar confianza en áreas espirituales desconocidas y me dedico diariamente a aprender y crecer, rodeado de rituales, música y estudios religiosos.
          </p>
          {/* ... More paragraphs */}
          <p className="mb-3">
          Estoy comprometido a ayudar a la humanidad a alcanzar un cambio significativo al tomar conciencia de la conciencia crística en nosotros. Agradezco poder ser parte de la vida de otros.
          </p>
          <p className="mb-3">
          Te invito a este viaje transformador; como tu guía espiritual, te proporcionaré apoyo y sabiduría en tu búsqueda de crecimiento personal y espiritual. Juntos podemos cambiar nuestras vidas y comprender mejor nuestro ser y el mundo.
          </p>
          <div className="flex justify-center">
            <a target="_blank"
              href="https://wa.me/18184263603?text=Hola%20maestro%20Manccini,%20quiero%20su%20orientación%20espiritual"
              className="inline-block bg-green-600 text-white font-bold rounded hover:bg-green-700 p-4"
            >
              
              <span className="mr-2">Contáctate conmigo aquí</span>
               <FontAwesomeIcon icon={faWhatsapp} /> 
              
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
