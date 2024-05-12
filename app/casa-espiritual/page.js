import MaxWidthWrapper from "@/components/max-width-wrapper/MaxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default async function page() {
  const imagenes = [
    {
      url: "/assets/gallery_1.jpg",
      descripcion: "Descripción de la imagen 1",
    },
    {
      url: "/assets/gallery_2.jpg",
      descripcion: "Descripción de la imagen 2",
    },
    {
      url: "/assets/gallery_3.jpg",
      descripcion: "Descripción de la imagen 2",
    },
    {
      url: "/assets/gallery_4.jpg",
      descripcion: "Descripción de la imagen 2",
    },
    // Agrega más imágenes aquí
  ];
  return (
    <MaxWidthWrapper className={"max-w-7xl py-8"}>
      <h1 className="text-3xl font-bold text-center mb-6">Casa Espiritual</h1>
      {/* <div className="  flex flex-wrap gap-2 justify-center items-start">
        {imagenes.map((imagen, index) => (
          <div key={index} className="p-4 bg-white shadow-sm  relative">
            <Image
              src={imagen.url}
              alt={imagen.descripcion}
              width={250}
              height={250}
            />
          </div>
        ))}
      </div> */}

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent autoplay loop>
          {imagenes.map((imagen, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 relative"
            >
              <div className="p-4 bg-white shadow-sm  relative flex justify-center items-center">
                <Image
                  src={imagen.url}
                  alt={imagen.descripcion}
                  width={250}
                  height={250}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="container mx-auto px-4 py-8">
        {/* Conoce Nuestras Instalaciones
Nuestra Casa es tu casa , Cada una de nuestras casas por el territorio Americano para compartir las Artes Curativas para encontrar el Amor deseado.

Curar ese mal que no la deja dormir.

ELEVE SU VIBRA A LA ABUNDANCIA.

¡Te esperamos!

PIDE TU UBICACION MAS CERCANA Y HAS PARTE DE NUESTRA CASA. */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h2 className=" text-2xl">Conoce Nuestras Instalaciones</h2>

            <p className="mb-4">
              Nuestra Casa es tu casa , Cada una de nuestras casas por el
              territorio Americano para compartir las Artes Curativas para
              encontrar el Amor deseado.
            </p>
            <p className="mb-2 font-semibold">
              Curar ese mal que no la deja dormir.
            </p>
            <div className="mb-4">
              <p>Eleve su vibra a la abundancia.</p>

              <h2 className="font-semibold">¡Te esperamos!</h2>
              <p>Los Angeles, Ca.</p>
              <p>90015</p>
              <p>1605 w Olympic blvd</p>
              <p>United States</p>
              <p>Suite 9003</p>
            </div>
            <div>
              <p className="font-semibold">Teléfono:</p>
              <p>+1(818) 426-3603</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p>[your-email@example.com]</p> {/* Replace with actual email */}
            </div>
          </div>
          <div className="md:w-1/2 h-96 md:h-auto md:ml-6">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7721846805657!2d-118.27413620000002!3d34.0497145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7bd35775043%3A0xe6c582c6c9b161be!2s1605%20W%20Olympic%20Blvd%2C%20Los%20Angeles%2C%20CA%2090015!5e0!3m2!1sen!2sus!4v1712866432812!5m2!1sen!2sus"
              title="Google Maps Location"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
