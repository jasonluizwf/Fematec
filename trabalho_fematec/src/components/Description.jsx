import React from "react";
import fLuz from "../assets/manLight.png"


const Description = () => {
    return (
        <div className="w-full bg-white py-16 px-4 ">
            <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center">
                <img className="w-[500px] mx-auto my-4 md:ml-0 md:mr-8" src={fLuz} alt="imagem" />    
                <div className="flex flex-col justify-center md:w-1/2">
                    <p className="text-[#00df9a] font-bold">Clareza, eficiência e versatilidade em iluminação</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Escolha a iluminação certa para cada ocasião</h1>
                    <p>
                    Descubra a tecnologia moderna e econômica das lâmpadas LED, perfeitas para economizar energia. 
                    As lâmpadas fluorescentes oferecem uma solução equilibrada, ideal para ambientes de trabalho. 
                    E, para um toque nostálgico, as lâmpadas incandescentes trazem o charme do passado.
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default Description;
