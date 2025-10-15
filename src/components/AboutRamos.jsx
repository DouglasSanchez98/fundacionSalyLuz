import React,{ useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import niño from '../assets/logofundacion1.png'
import niño2 from '../assets/logoblanco.png'
import fondo from '../assets/fondo1.png'
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
      className="w-full h-screen  bg-cover bg-center relative bg-white"
      >
        

       <div className="max-w-screen-lg px-4 mx-auto flex flex-col md:flex-row items-center justify-center w-full h-full gap-8">
        {/* TEXTO */}
        <div className="w-full md:w-1/2 ">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-orange-one">
            Queremos ser de bendición, esperanza y luz en comunidades marginadas. 
          </p>

          <p className="text-1xl sm:text-xl mt-6 text-green-one">
            <strong>Misión:</strong>  Brindar apoyo integral a comunidades en situación de vulnerabilidad, promoviendo el desarrollo espiritual, educativo y social, reflejando el amor de Dios de manera práctica y transformadora.

          </p>
          <p className="text-1xl sm:text-xl mt-6 text-green-one">
            <strong>Visión:</strong> Ser una fundación referente en transformación social cristocéntrica, generando cambios sostenibles en comunidades, familias e individuos a través del servicio, la fe y el compromiso.
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