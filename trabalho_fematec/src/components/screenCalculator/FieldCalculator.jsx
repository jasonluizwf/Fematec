import React, { useState, useRef } from "react";
import imgManCalc from "../../assets/ManCalculator.png";
import lampOff from "../../assets/lampOff.png";
import bckGround from "../../assets/backGroundShowResult.png";




const FieldCalculator = () => {

    const lastDivRef = useRef();

    const [tarifa, setTarifa] = useState(0);
    const [hora, setHora] = useState(0);
    const [potencia, setPotencia] = useState(0);
    const [qtd, setQtd] = useState(0);

    const [rLed, setRLed] = useState(0);
    const [rFlu, setRFlu] = useState(0);
    const [rInc, setrInc] = useState(0);

    const calculoEficiencia = (e) => {

        const ledValue = (((hora * (potencia * 1)) / 1000) * tarifa) * qtd;
        const fluValue = (((hora * (potencia * 1.95)) / 1000) * tarifa) * qtd;
        const incValue = (((hora * (potencia * 6.55)) / 1000) * tarifa) * qtd;

        setRLed(ledValue.toFixed(2));
        setRFlu(fluValue.toFixed(2));
        setrInc(incValue.toFixed(2));

        lastDivRef.current.scrollIntoView({ behavior: "smooth" });
        e.preventDefault();
    }

    return (
        <> <div className="flex justify-center items-center text-black h-[800px] bg-[#ffffff] ">
            <div>
                <img className="rounded-full mx-auto" src={imgManCalc} alt="imgMancCalc"
                />
            </div>

            <form onSubmit={calculoEficiencia} >
                <div className="grid grid-rows-2 grid-flow-col gap-4 rounded-md backdrop-blur-md bg-[#b6b6b6] p-10 bg-opacity-30" >
                    <div className="grid justify-center">
                        <label className=" font-bold ">Tarifa Média</label>
                        <input
                            className="p-3 m-3 rounded-md"
                            type="number"
                            placeholder="Digite um valor "
                            onChange={(e) => setTarifa(e.target.value)}
                            value={tarifa}
                        />
                    </div>

                    <div className="grid">
                        <label className=" font-bold ">Quantidade de Horas</label>
                        <input
                            className="p-3 m-3 rounded-md "
                            type="number"
                            placeholder="Digite um valor: "
                            onChange={(e) => setHora(e.target.value)}
                        />
                    </div>

                    <div className="grid">
                        <label className=" font-bold ">Potência da Lâmpada</label>
                        <input
                            className="p-3 m-3 rounded-md"
                            type="number"
                            placeholder="Digite um valor: "
                            onChange={(e) => setPotencia(e.target.value)}
                        />
                    </div>

                    <div className="grid">
                        <label className="font-bold">Quantidade de Lâmpadas</label>
                        <input
                            className="p-3 m-3 rounded-md"
                            type="number"
                            placeholder="Digite um valor: "
                            onChange={(e) => setQtd(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-black bg-[#00df9a] hover:bg-green-400" >Calcular</button>
                </div>
            </form>
        </div>
        <div className="w-full py-[7cm] px-4 bg-white " style={{ backgroundImage: `url(${bckGround})`}} ref={lastDivRef}>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8" >
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-3xl hover:scale-105 duration-300 backdrop-blur">
                    <img className="mx-auto mt-[-3rem] hover:brightness-200" src={lampOff} alt="a" />
                    <h2 className="text-2xl font-bold text-center py-8">Lampada Led</h2>
                    <h1 className="text-center text-4xl font-bold">R${" " +rLed} </h1>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-3xl hover:scale-105 duration-300 backdrop-blur-md bg-opacity-30">
                    <img className="mx-auto mt-[-3rem] hover:brightness-200" src={lampOff} alt="a" />
                    <h2 className="text-2xl font-bold text-center py-8">Lampada Fluorescente</h2>
                    <h1 className="text-center text-4xl font-bold">R${" " +rFlu}</h1>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-3xl hover:scale-105 duration-300 backdrop-blur-md bg-opacity-30">
                    <img className="mx-auto mt-[-3rem] hover:brightness-200" src={lampOff} alt="a" />
                    <h2 className="text-2xl font-bold text-center py-8">Lampada Incandescente</h2>
                    <h1 className="text-center text-4xl font-bold">R${" " +rInc}</h1>
                </div>
            </div>  
        </div>
        </>
    )
}

export default FieldCalculator;