import React, { useState, useEffect } from "react";
import { MapPin, Mail } from "lucide-react";

const PieDePagina = () => {
  const slides = [
    {
      id: 1,
      title: "Fundación Sal y Luz",
      content: "",
    },
    {
      id: 2,
      title: "Nuestra Ubicación",
      content: "Integración del Norte UV 11, Barrio Paraíso",
      icon: <MapPin className="w-6 h-6 text-orange-one" />,
    },
    {
      id: 3,
      title: "Cómo podemos ayudarte?",
      content: (
        <>
          <p>info@yourdomain.com</p>
          <p>contact@yourdomain.com</p>
        </>
      ),
      icon: <Mail className="w-6 h-6 text-orange-one" />,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <footer className="w-full bg-white border-t border-gray-200 text-gray-700">
      {/* Versión para PC */}
      <div className="hidden md:flex justify-between items-start max-w-6xl mx-auto px-6 py-10">
        <div className="w-1/3">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Fundación Sal y Luz
          </h2>
        </div>

        <div className="w-1/3 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="w-6 h-6 text-orange-one" />
            <h3 className="font-semibold text-gray-900">Nuestra Ubicación</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Integración del Norte UV 11, Barrio Paraíso, Santa Cruz - Bolivia
          </p>
        </div>

        <div className="w-1/3 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-1">
            <Mail className="w-6 h-6 text-orange-one" />
            <h3 className="font-semibold text-gray-900">Cómo podemos ayudarte?</h3>
          </div>
          <p className="text-sm text-gray-600">info@yourdomain.com</p>
          <p className="text-sm text-gray-600">contact@yourdomain.com</p>
        </div>
      </div>

      {/* Versión móvil con carrusel */}
      <div className="md:hidden w-full overflow-hidden relative py-10 text-center h-48 flex items-center justify-center">
        {/* Contenedor de transición */}
        <div
          className="transition-all duration-700 ease-in-out absolute inset-0 flex flex-col items-center justify-center"
          key={slides[currentSlide].id}
        >
          {slides[currentSlide].icon && (
            <div className="flex justify-center mb-3">
              {slides[currentSlide].icon}
            </div>
          )}
          <h2 className="text-lg font-semibold text-gray-900 mb-2 px-4">
            {slides[currentSlide].title}
          </h2>
          <div className="text-sm text-gray-600 px-6 leading-relaxed">
            {slides[currentSlide].content}
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-200 mt-4">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-center items-center text-sm text-gray-500">
          <div className="flex items-center px-2 gap-2 mb-2 md:mb-0">
            <div className="bg-green-one text-white rounded-full p-2 text-xs font-bold">
              F
            </div>
            <span className="font-semibold text-gray-700">Fundación Sal y Luz</span>
          </div>
          <p>© 2025 Fundación Sal y Luz | Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default PieDePagina;
