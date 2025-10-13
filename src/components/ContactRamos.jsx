import React from 'react'


const ContactRamos = () => {
    return (
        <div name="contacto"
            className="w-full h-screen bg-green-two p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-orange-one">Contáctanos</p>
                    <p className="py-6">Queremos trabajar contigo. Puedes escribir tus consultas aquí</p>
                </div>

                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/948fd638-5206-46a2-804e-074aefedc631"
                        method="POST"
                        className=" flex flex-col w-full md:w-1/2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Ingresa tu nombre"
                            className="p-2 bg-transparent border-2 border-orange-one rounded-md text-white focus:outline-none font-medium " />
                        <input
                            type="text"
                            name="email"
                            placeholder="Ingresa tu email"
                            className=" my-4 p-2 bg-transparent border-2 border-orange-one rounded-md text-white focus:outline-none font-medium" />
                        <textarea name="message"
                            placeholder="Escribe tu mensaje"
                            rows="10"
                            className="p-2 bg-transparent border-2 border-orange-one rounded-md text-white focus:outline-none font-medium"></textarea>

                        <button className="text-black font-semibold
 bg-gradient-to-b from-orange-one to-white px-6 py-3 mt-3 mx-auto flex items-center rounded-md hover:sacale-110 duratión-300">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactRamos