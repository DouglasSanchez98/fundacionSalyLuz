import React, { useEffect, useState } from 'react';
import niño from '../assets/logofundacion1.png';
import niño2 from '../assets/logoblanco.png';

const AboutRamos = () => {
  const [mostrarPrimeraImagen, setMostrarPrimeraImagen] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setMostrarPrimeraImagen((prev) => !prev);
    }, 3000);
    return () => clearInterval(intervalo);
  }, []);

  const imagenActual = mostrarPrimeraImagen ? niño : niño2;

  return (
    <div
      name="quehacemos"
      className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* TEXTO */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-one leading-snug">
            Queremos ser de bendición, esperanza y luz en comunidades marginadas.
          </p>

          <p className="text-lg sm:text-xl text-green-one">
            <strong>Misión:</strong> Brindar apoyo integral a comunidades en situación de vulnerabilidad, promoviendo el desarrollo espiritual, educativo y social, reflejando el amor de Dios de manera práctica y transformadora.
          </p>

          <p className="text-lg sm:text-xl text-green-one">
            <strong>Visión:</strong> Ser una fundación referente en transformación social cristocéntrica, generando cambios sostenibles en comunidades, familias e individuos a través del servicio, la fe y el compromiso.
          </p>
        </div>

        {/* IMAGEN */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={imagenActual}
            alt="Niño"
            className="rounded-2xl object-contain w-full max-w-sm md:max-w-md h-auto shadow-xl transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutRamos;
