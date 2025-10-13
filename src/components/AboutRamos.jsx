import React,{ useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import niño from '../assets/niño.png'
import niño2 from '../assets/niño2.png'
import fondo from '../assets/fondoQuienesSomos.JPG'
// Para usar si necesito degradar colores className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
const AboutRamos = () => {
  const [mostrarPrimeraImagen, setMostrarPrimeraImagen] = useState(true)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setMostrarPrimeraImagen(prev => !prev) // Alterna el valor booleano
    }, 3000)

    return () => clearInterval(intervalo) // Limpieza al desmontar
  }, [])

  const imagenActual = mostrarPrimeraImagen ? niño : niño2
  return (
    <div
      name="quehacemos"
      className="w-full h-screen  bg-cover bg-center relative "
      style={{
        backgroundImage: `url(${fondo})`,
      }}>
        

       <div className="max-w-screen-lg px-4 mx-auto flex flex-col md:flex-row items-center justify-center w-full h-full gap-8 pt-10 ">
        {/* TEXTO */}
        <div className="w-full md:w-1/2">
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-orange-one">
            Creemos en los niños. Invertimos en su presente para transformar su futuro.
          </p>

          <p className="text-1xl sm:text-2xl mt-6 text-green-one">
            <strong>Misión:</strong> Brindar apoyo integral a niños y adolescentes en situación de vulnerabilidad, promoviendo su desarrollo físico, emocional y educativo.
          </p>
          <p className="text-1xl sm:text-2xl mt-6 text-green-one">
            <strong>Visión:</strong> Construir un entorno donde todos los niños tengan oportunidades para un desarrollo digno y pleno.
          </p>
        </div>

        {/* IMAGEN */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={imagenActual}
            alt="Niño"
            className="rounded-xl object-cover w-full max-w-md h-auto shadow-lg"
          />
        </div>
      </div>

    </div>
    
  )
}

export default AboutRamos