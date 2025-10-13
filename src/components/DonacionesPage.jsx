import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import terra from "../assets/globoterra.png";
import boliviaFlag from "../assets/banderaBolivia.jpg";
import qrBolivia from "../assets/qrFundacionDanielito.jpg";
import logofundacion1 from '../assets/logofundacion1.png';


const DonacionesPage = () => {
  const [modalType, setModalType] = useState(null); // null | 'bolivia' | 'internacional'
  const [animate, setAnimate] = useState(false); // control para animación de entrada/salida

  const opciones = [
    {
      id: 1,
      pais: "Internacional",
      descripcion: "Paypal, transferencia bancaria o suscripción por correo",
      bandera: terra,
    },
    {
      id: 2,
      pais: "Bolivia",
      descripcion: "Transferencia bancaria",
      bandera: boliviaFlag,
    },
  ];

  const handleMasInfo = (pais) => {
    if (pais === "Bolivia") {
      setModalType("bolivia");
    } else {
      setModalType("internacional");
    }
  };

  // Control de animación de entrada
  useEffect(() => {
    if (modalType) {
      setTimeout(() => setAnimate(true), 10); // dispara la animación después de montar
    } else {
      setAnimate(false);
    }
  }, [modalType]);

  const handleCloseModal = () => {
    // animación de salida antes de desmontar
    setAnimate(false);
    setTimeout(() => setModalType(null), 300); // coincide con la duración de la animación
  };

  return (
    <div
      className="bg-white min-h-screen flex flex-col"
     
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
        <h1 className="text-2xl font-bold hidden lg:block">Donaciones</h1>
        <Link
          to="/"
          className="bg-orange-one hover:bg-orange-600 text-white px-2 py-2 rounded"
        >
          ← Volver al inicio
        </Link>
      </header>
    <div className="w-full flex flex-col items-center pt-20 bg-white">
        
      <h2 className="text-2xl md:text-3xl font-bold text-green-two mb-6">
        Donar desde
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {opciones.map((opcion) => (
          <div
            key={opcion.id}
            className="bg-white rounded-xl shadow-xl hover:shadow-2xl p-6 flex flex-col items-center transition"
          >
            <div className="w-40 h-40 rounded-full border border-gray-300 flex items-center justify-center mb-4">
              <img
                src={opcion.bandera}
                alt={opcion.pais}
                className="w-28 h-15 object-cover rounded"
              />
            </div>
            <h3 className="text-lg font-semibold text-orange-one">
              {opcion.pais}
            </h3>
            <p className="text-gray-600 text-center text-sm mb-4">
              {opcion.descripcion}
            </p>
            <button
              onClick={() => handleMasInfo(opcion.pais)}
              className="bg-green-two text-white px-6 py-2 rounded-lg hover:bg-orange-one transition"
            >
              Más información
            </button>
          </div>
        ))}
      </div>

      {/* Modal (Bolivia o Internacional) */}
      {modalType && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${animate ? "opacity-100" : "opacity-0"}`}>
          <div className={`bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative transform transition-all duration-300 ${animate ? "scale-100 translate-y-0" : "scale-90 -translate-y-5"}`}>
            {/* Botón cerrar */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl"
            >
              &times;
            </button>

            {/* Contenido dinámico del modal */}
            {modalType === "bolivia" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Imagen QR */}
                <div className="flex justify-center">
                  <img
                    src={qrBolivia}
                    alt="QR Bolivia"
                    className="w-48 h-48 object-contain"
                  />
                </div>
                {/* Texto con número de cuenta */}
                <div className="flex flex-col justify-center text-center md:text-left">
                  <h3 className="text-xl font-bold text-green-two mb-4">
                    Cuenta Bancaria
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Banco: Banco Nacional de Bolivia
                  </p>
                  <p className="text-gray-700 mb-2">Titular: FUNDACION DANIELITO</p>
                  <p className="text-gray-700 font-semibold">
                    Nro de Cuenta: 2000265082
                  </p>
                  <p className="text-gray-700">Moneda: Bolivianos</p>
                </div>
              </div>
            )}

            {modalType === "internacional" && (
              <div className="flex flex-col items-center justify-center py-10">
                <h3 className="text-xl font-bold text-green-two mb-4">Disponible próximamente</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default DonacionesPage;
