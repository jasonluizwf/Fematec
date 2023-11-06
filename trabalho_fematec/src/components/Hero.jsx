import React from "react";
import { useNavigate } from 'react-router-dom';
import {useTypewriter} from "react-simple-typewriter";

const Hero = () => {

    const navigate = useNavigate();

    const handleNavigateToCalculator = () => {
        navigate('/calculator');
    };

    const [text] =useTypewriter({
        words: ["LED", "FLUORESCENTE", "INCANDESCENTE"],
        loop: {}
    })

    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
                <p className="text-[#00df9a] font-bold p-2">Pensando em eficiência energética ?</p>
                <h1 className="md: text-7xl sm:text-6xl font-bold m:py-6">Não faça a escolha errada.</h1>
                <div>
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">Entenda suas opções</p>
                    <div className="md: text-5xl sm:text-4xl font-bold md:pl-4 pl-2 text-[#00df9a]">
                        {text}
                    </div>
                    <div>
                        <p className="md:text-2xl text-xl font-bold text-gray-500">Monitore seus custos aqui.</p>
                        <button onClick={handleNavigateToCalculator} className="bg-[#00df9a] w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-black" >Começar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;