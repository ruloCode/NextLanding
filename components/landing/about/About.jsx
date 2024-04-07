import React from 'react'

export const About = () => {
  return (
    <div className="relative bg-navy bg-[url('../public/assets/hero_bg.png')] bg-no-repeat bg-cover flex justify-center w-full">
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
  )
}

export default About