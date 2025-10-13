import React, { useEffect, useRef } from 'react';
import Video from '../assets/videoPropaganda2.mp4';

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

      {/* Texto centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-3xl sm:text-5xl font-bold drop-shadow-lg">
          Fundacion Danielito
        </h1>
        <p className="mt-4 text-lg sm:text-2xl drop-shadow">
          Trabajamos con amor y entrega junto a familias, cuidadores y comunidades, transformando vidas con principios cristianos
        </p>
      </div>
    </div>
  );
};

export default VideoExampleComp;
