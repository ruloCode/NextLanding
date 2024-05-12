import { Button } from "@/components/ui/button";
import React from "react";

export const Consulta = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#11181F]  p-4 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Reserva Tu Consulta .
      </h2>
      <p className="text-lg md:text-xl mt-4 text-center">
        Atención Inmediata y Personalizada a un Clic de Distancia.
      </p>
      <Button className="md:text-lg p-4 md:p-6  font-semibold  bg-[#008DDA]  mt-4">
       <a target="_blank" href="https://wa.me/18184263603?text=Hola,%20quiero%20reservar%20mi%20consulta">Reserva tu consulta</a>
        
      </Button>
    </div>
  );
};

export default Consulta;
