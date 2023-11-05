import React from "react";

const NewsLetter = () => {
    return (
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-4">
                <div className="lg:col-span-2">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Possui interessa em nossos produtos?
                    </h1>
                    <p>Nos envie uma mensagem e retornaremos!</p>
                </div>
                <div className="my-4">
                    <div className="flex  flex-col sm:flex-row items-center justify-between w-full text-black">
                        <form>
                        <input className="p-3 m-3 flex w-full rounded-md" type="text" placeholder="Digite seu nome: " />
                        <input  className="p-3 m-3 flex w-full rounded-md" type="email" placeholder="Digite seu email:" />
                        <textarea  className="p-3 m-3 flex w-full rounded-md"  type="text" placeholder="Digite uma mensagem: "/>
                        <button className="bg-[#00df9a] text-black rounded-full font-medium w-[200px] ml-4 my-6 px-6 py-3">Enviar</button>
                        </form>
                    </div>
                        <p>Fique tranquilo, nos importamos com a proteção dos seus dados.</p>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;