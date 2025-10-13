import { Link } from "react-router-dom";
import img2pentaguazu from "../assets/pentaguazu2.jpg";
import img3pentaguazu from "../assets/pentaguazu3.jpg";
import logofundacion1 from '../assets/logofundacion1.png';
import ReactWhatsapp from 'react-whatsapp';
import React, { useEffect, useState } from "react";
import fondo from "../assets/fondoQuienesSomos.JPG";

export default function CdiPentaguazu() {
  const [mostrarPrimeraImagen, setMostrarPrimeraImagen] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setMostrarPrimeraImagen((prev) => !prev);
    }, 3000);
    return () => clearInterval(intervalo);
  }, []);

  const imagenActual = mostrarPrimeraImagen ? img2pentaguazu : img3pentaguazu;

  return (
    <div
      className="bg-green-two min-h-screen text-white flex flex-col"
     
    >
      {/* Encabezado con botón de regreso */}
      <header className="bg-white text-green-two p-1 flex justify-between items-center">
        <div className="h-full">
                        <img
                            src={logofundacion1}
                            alt="Logo Fundación Danielito"
                            className="pt-2 rounded-2xl mx-auto md:h-18 h-20"
                        />
                    </div>
        <h1 className="text-2xl font-bold hidden lg:block">CDI Pentaguazú</h1>
        <Link
          to="/"
          className="bg-orange-one hover:bg-orange-600 text-white px-2 py-2 rounded"
        >
          ← Volver al inicio
        </Link>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 p-8">
        <div
          name="quehacemos"
          className="w-full h-screen bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${fondo})`,
          }}
        >
          <div   className="max-w-screen-lg px-4 mx-auto flex flex-col md:flex-row items-center md:justify-center w-full h-full gap-8 pt-4 md:pt-10"
>
            {/* TEXTO */}
            <div className="w-full md:w-1/2">
              <p className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-orange-one">
                Presentamos el Centro de Desarrollo Integral en Pentaguazú
              </p>

              <p className="text-1xl sm:text-2xl mt-6 text-green-one">
                <strong>Grupo objetivo:</strong> PROGRAMA JUVENTUD (12 hasta 21 años), PROGAMA NIÑEZ (1 hasta 11 años)
              </p>

              <p className="text-1xl sm:text-2xl mt-6 text-green-one">
                <strong>Cómo ayudar?</strong> Si deseas apoyar puedes contactarte con nosotros.
              </p>

              {/* BOTÓN CENTRADO */}
              <div className="mt-4 flex justify-center">
                <ReactWhatsapp 
                number="+59177027843"
                            message="Saludos, necesito Información sobre la Fundación Danielito"
                            element='text'>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-md">
                  Contactar
                </button>
                </ReactWhatsapp>
              </div>
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
      </main>
    </div>
  );
}
