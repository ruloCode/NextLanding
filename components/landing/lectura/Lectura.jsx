import React from "react";

export const Lectura = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#11181F]  p-4 text-white">
      <h2 className="text-4xl md:text-4xl font-bold text-center">
        ¿Sufre de depresion, mal de amor y lleva Varias noches sin dormir?
      </h2>
      <p className="text-lg md:text-xl mt-4 text-center">
        Pide su consulta ahora
      </p>
      <p className="text-md md:text-lg mt-2 text-center">
        Yo tengo la solución con hechos
      </p>
      <button className="mt-6 px-6 py-2 border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-dark-blue transition duration-300 rounded-full">
        <a target="_blank" href="https://wa.me/18184263603?text=Hola,%20quiero%20reservar%20mi%20consulta">Reserva tu consulta</a>
        
      </button>
    </div>
  );
};

export default Lectura;
