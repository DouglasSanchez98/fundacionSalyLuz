import React, { useEffect, useRef } from 'react';
import Video from '../assets/videoPropaganda2.mp4';
import Logo from '../assets/logofundacion1.png'; // 🟢 Asegúrate de tener el logo aquí

const VideoExampleComp = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
    }
  }, []);

  return (
    <div name="inicio" className="relative w-full h-screen overflow-hidden pt-20">
      {/* Video desenfocado de fondo */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover blur-sm brightness-75"
      >
        <source src={Video} type="video/mp4" />
        Tu navegador no admite la reproducción de videos.
      </video>

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        {/* 🟡 Logo sobre el título */}
        <img
          src={Logo}
          alt="Logo Fundación Sal y Luz"
          className="w-36 sm:w-36 mb-4 drop-shadow-lg"
        />

        <h1 className="text-3xl sm:text-5xl font-bold drop-shadow-lg">
          Fundación Sal y Luz
        </h1>
        <p className="mt-4 text-lg sm:text-2xl drop-shadow">
          Sé la luz que cambia la historia de un niño.
        </p>
      </div>
    </div>
  );
};

export default VideoExampleComp;
