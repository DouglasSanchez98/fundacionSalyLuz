import React from 'react'
import PatrocinadorUno from '../assets/patUnoaUno.png'
import PatrocinadorProyecto from '../assets/patProyectos.png'
import Donante from '../assets/donanteGeneral.png'
import fondoDonaciones from '../assets/fondo5.png'

const Trabajos = () => {
    const portfolios = [
        {
            id: 1,
            src: PatrocinadorUno,
            tipo: 'Patrocinador Uno a Uno',
            cliente: 'Click para mayor información',
            area:'Apoya el crecimiento y formación de una vida',
            href:'https://www.fundanielitobolivia.org'        
        },
        {
            id: 2,
            src: PatrocinadorProyecto,
            tipo: 'Patrocinador a Proyectos',
            cliente: 'Click para mayor información',
            area:'Se parte de proyectos que ayudan a muchos',
            href:'https://www.fundanielitobolivia.org'
        },
        {
            id: 3,
            src: Donante,
            tipo: 'Donante General',
            cliente: 'Click para mayor información',
            area:'Conviertete en donante de la fundación',
            href:'https://www.fundanielitobolivia.org'
        },
       
    ]
    return (
        <div name="comoapoyar"
            className="   text-orange-one w-full"
            style={{
                    backgroundImage: `url(${fondoDonaciones})`,
                  }}>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full  items-start">
                <div className="pb-1 ">
                    <p className="text-4xl font-bold inline border-b-4 border-green-two"
                    >Donaciones</p>
                    <p className="py-6">Conoce las maneras en que puedes apoyar</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-12 sm:px-0 bg-white">
                    {
                        portfolios.map(({ id, src, tipo, cliente, href,area }) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <a href={href} target="_blank" rel="noopener noreferrer">
                                    <img src={src} alt=""
                                        className="rounded-md duration-200 hover:scale-105" />
                                </a>
                                <div className="flex flex-col items-center justify-center">
                                    <button className="m-1 duration-200 hover:scale-105 hover:bg-slate-800 rounded-lg font-semibold text-lg">{tipo}</button>
                                    <button className="m-1 duration-200 hover:scale-105 hover:bg-slate-800 rounded-lg ">{area}</button>
                                    <button className="m-1 duration-200 hover:scale-105 hover:bg-slate-800 rounded-lg ">{cliente}</button>
                                </div>
                            </div>
                        ))
                    }


                </div>

            </div>

        </div>
    )
}

export default Trabajos