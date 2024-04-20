import React from "react";

export const Testimonios = () => {
  <iframe
    width="560"
    height="315"
    src=""
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>;
  const testimonios = [
    {
      nombre: "Oscar",
      videoUrl: "https://www.youtube.com/embed/3tdYDxSmA3E?si=ZlMjKaCMR4O2QmbO",
      descripcion:
        "¡Oscar es la prueba viva de que es posible transformar tu vida y restaurar la armonía en tu relación de pareja! Nos enorgullecemos de haber sido parte de su viaje hacia la resolución de problemas de pareja. Su testimonio es un recordatorio de que el amor y la felicidad pueden florecer nuevamente.",
    },
    {
      nombre: "Sofía",
      videoUrl: "https://www.youtube.com/embed/kyfC5lj_iVI?si=3xA0IqAJU-3MxjW",
      descripcion:
        "Sofía es un testimonio vivo de que la protección espiritual puede brindarte seguridad y paz en tiempos de adversidad. En Mundo Espiritual, estamos comprometidos en ayudar a personas como Sofía a enfrentar y superar las influencias negativas. Su historia es un testimonio del poder de la espiritualidad y la protección que ofrecemos.",
    },
    {
      nombre: "Maxi",
      videoUrl: "https://www.youtube.com/embed/9FhW1nkTxeE?si=wxVvU5BMp2-9VK-s",
      descripcion:
        "Maxi nos muestra que la ansiedad y la enfermedad no tienen por qué definir nuestras vidas. Estamos dedicados a ayudar a personas como Maxi a superar los desafíos que la vida les presenta.Su testimonio es un poderoso recordatorio de que la espiritualidad y el apoyo pueden desempeñar un papel crucial en la recuperación y el bienestar.",
    },
    {
      nombre: "Isaias",
      videoUrl: "https://www.youtube.com/embed/EOxAE--4UZI?si=w9cPn3hf1CsXk4Ec",
      descripcion:
        "Nuestro querido amigo es un testimonio viviente de cómo es posible recuperar la plenitud en tu vida íntima y disfrutar de una relación de pareja más satisfactoria. Agradecemos tu confianza por habernos permitido ser parte de su camino hacia la superación de la impotencia sexual.Su historia es un recordatorio de que la espiritualidad y el apoyo pueden marcar una diferencia significativa en nuestra vida íntima en pareja.",
    },
    // Agrega más testimonios aquí
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">
        Nuestros testimonios
      </h1>
      <div className="grid  gap-4 md:grid-cols-2 items-start ">
        {testimonios.map((testimonio, index) => {
          return (
            <div
              key={index}
              className="text-center flex justify-center w-full flex-col items-center"
            >
              <h2 className="text-2xl font-semibold my-4">
                Conoce A {testimonio.nombre}
              </h2>
              <div className=" md:w-[560px] md:h-[315px] w-full h-80  ">
                <iframe
                  className="w-full h-full"
                  src={testimonio.videoUrl}
                  title="Video Testimonio"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-base my-4 max-w-[620px]">
                {testimonio.descripcion}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonios;
