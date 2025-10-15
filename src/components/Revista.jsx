import { Download } from "lucide-react";
import revista from '../assets/revista2024.png';
import fondo from '../assets/fondoQuienesSomos.JPG'


export default function Revista() {
  return (
    <section className="w-full py-10 px-4"
    style={{
                    backgroundImage: `url(${fondo})`,
                  }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Texto */}
        <div className="bg-orange-one text-white p-8 rounded-lg relative">
          <h2 className="text-2xl font-bold mb-4">
            Gracias a ti mejoramos <br /> la vida de niños y adolescentes
          </h2>
          <p className="mb-4 text-sm">
            Aquí puedes encontrar la Revista Anual más reciente. 
            Si tienes interés en ediciones anteriores, por favor, 
            realiza tu petición a <a href="mailto:cdi.bo.817@hotmail.com" className="underline">cdi.bo.817@hotmail.com</a>.
          </p>
          
          {/* Botón de descarga */}
          <a
            href= 'https://drive.google.com/file/d/1xYkQdPRtO19CsyFeOS7pin8iILOVpzEb/view?usp=sharing'
            target="_blank"
            rel="noopener noreferrer"
            //download
            className="inline-flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            <Download size={18} />
            Descargar
          </a>
        </div>

        {/* Imagen */}
        <div className="flex flex-col items-center text-center">
          <img
            src={revista}
            alt="Memoria 2023"
            className="rounded-lg shadow-lg max-h-[350px] object-cover"
          />
          <p className="mt-3 font-bold text-orange-one text-lg">Revista 2024</p>
        </div>
      </div>
    </section>
  );
}
