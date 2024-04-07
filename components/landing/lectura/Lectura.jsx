import React from "react";

export const Lectura = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#11181F]  p-4 text-white">
      <h2 className="text-4xl md:text-4xl font-bold text-center">
        ¿Sufre de depresion, Mal de Amor y lleva Varias noches sin dormir?
      </h2>
      <p className="text-lg md:text-xl mt-4 text-center">
        PIDA SU CONSULTA AHORA
      </p>
      <p className="text-md md:text-lg mt-2 text-center">
        YO LE TENGO LA SOLUCION CON HECHOS
      </p>
      <button className="mt-6 px-6 py-2 border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-dark-blue transition duration-300 rounded-full">
        Reserva tu consulta
      </button>
    </div>
  );
};

export default Lectura;
