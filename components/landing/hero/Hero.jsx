import React from "react";
import { Button } from "@/components/ui/button";
// import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <div className="text-white font-bold py-36 text-center space-y-5
    bg-navy bg-[url('../public/assets/bg_2.png')] bg-no-repeat bg-cover
    ">
      <div className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl space-y-5 font-extrabold">
        <h1>Descubre el equilibrio y protección </h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
          espiritual
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400">
          Con nuestras lecturas de tarot y limpiezas energéticas. Transforma tu
          vida hoy.
        </div>
       
        <Button variant='secondary'  className='md:text-lg p-4 md:p-6 rounded-full font-semibold'>
          
          <a target="_blank" href="https://wa.me/18184263603?text=Hola%20estoy%20interesado,%20me%20podr%C3%ADan%20dar%20más%20información">Lectura de tarot sin Costo</a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
