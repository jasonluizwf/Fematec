import React, { useState } from "react";
import lamp1 from "../assets/lamp1.png";
import lamp2 from "../assets/lamp2.png";
import lamp3 from "../assets/lamp3.png";

const CalculatorRoute = () => {
    const [tarifaMedia, setTarifaMedia] = useState("");
    const [quantidadeHoras, setQuantidadeHoras] = useState("");
    const [potenciaLampada, setPotenciaLampada] = useState("");
    const [quantidadeLampadas, setQuantidadeLampadas] = useState("");
    const [lampadaSelecionada, setLampadaSelecionada] = useState(null);
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const [consumo, setConsumo] = useState(0);

    const calcularConsumo = () => {
        if (tarifaMedia && quantidadeHoras && potenciaLampada && quantidadeLampadas) {
            let resultado = 0;

            if (lampadaSelecionada === "led") {
                resultado = (quantidadeLampadas * tarifaMedia * quantidadeHoras * potenciaLampada) / 1000;
            } else if (lampadaSelecionada === "fluorescente") {
                resultado = (quantidadeLampadas * tarifaMedia * quantidadeHoras * 1.95 * potenciaLampada) / 1000;
            } else if (lampadaSelecionada === "incandescente") {
                resultado = (quantidadeLampadas * tarifaMedia * quantidadeHoras * 6.55 * potenciaLampada) / 1000;
            }

            return resultado.toFixed(2); // Arredonda para 2 casas decimais
        }
        return 0;
    };

    const selecionarLampada = (lampada) => {
        setLampadaSelecionada(lampada);
        setConsumo(calcularConsumo());
        setMostrarResultado(true);
    };

    const voltarAoFormulario = () => {
        setMostrarResultado(false);
        setTarifaMedia("");
        setQuantidadeHoras("");
        setPotenciaLampada("");
        setQuantidadeLampadas("");
        setLampadaSelecionada(null);
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md mt-8 mx-auto max-w-md">
            <h1 className="text-3xl font-bold mb-4">Calculadora de Eficiência Energética</h1>

            {mostrarResultado ? (
                <div className="transition-opacity duration-500 opacity-100">
                    <div className="grid grid-cols-3 gap-10">
                        <div>
                            <img
                                src={lamp1}
                                alt="Lâmpada LED"
                                className={`cursor-pointer ${
                                    lampadaSelecionada === "led" ? "border-4 border-green-500" : ""
                                }`}
                                onClick={() => selecionarLampada("led")}
                            />
                        </div>
                        <div>
                            <img
                                src={lamp2}
                                alt="Lâmpada Fluorescente"
                                className={`cursor-pointer ${
                                    lampadaSelecionada === "fluorescente" ? "border-4 border-green-500" : ""
                                }`}
                                onClick={() => selecionarLampada("fluorescente")}
                            />
                        </div>
                        <div>
                            <img
                                src={lamp3}
                                alt="Lâmpada Incandescente"
                                className={`cursor-pointer ${
                                    lampadaSelecionada === "incandescente" ? "border-4 border-green-500" : ""
                                }`}
                                onClick={() => selecionarLampada("incandescente")}
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        {lampadaSelecionada && (
                            <div>
                                <p className="text-lg font-semibold">
                                    Consumo: {consumo} kWh
                                </p>
                                <p className="text-lg font-semibold">
                                    Valor em Reais: R${(consumo * tarifaMedia).toFixed(2)}
                                </p>
                                <button
                                    className="bg-[#00df9a] text-black rounded-full font-medium py-2 mt-4 hover:bg-[#00a57d] w-full"
                                    onClick={voltarAoFormulario}
                                >
                                    Voltar ao Formulário
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <form className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="tarifaMedia" className="text-sm font-semibold">
                            Tarifa Média em reais:
                        </label>
                        <input
                            type="number"
                            id="tarifaMedia"
                            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-[#00df9a]"
                            value={tarifaMedia}
                            onChange={(e) => setTarifaMedia(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="quantidadeHoras" className="text-sm font-semibold">
                            Quantidade de Horas:
                        </label>
                        <input
                            type="number"
                            id="quantidadeHoras"
                            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-[#00df9a]"
                            value={quantidadeHoras}
                            onChange={(e) => setQuantidadeHoras(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="potenciaLampada" className="text-sm font-semibold">
                            Potência da Lâmpada (Watts):
                        </label>
                        <input
                            type="number"
                            id="potenciaLampada"
                            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-[#00df9a]"
                            value={potenciaLampada}
                            onChange={(e) => setPotenciaLampada(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="quantidadeLampadas" className="text-sm font-semibold">
                            Quantidade de Lâmpadas:
                        </label>
                        <input
                            type="number"
                            id="quantidadeLampadas"
                            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-[#00df9a]"
                            value={quantidadeLampadas}
                            onChange={(e) => setQuantidadeLampadas(e.target.value)}
                        />
                    </div>

                    <button
                        className="bg-[#00df9a] text-black rounded-full font-medium py-2 hover:bg-[#00a57d] w-full"
                        onClick={() => {
                            setMostrarResultado(true);
                            setConsumo(calcularConsumo());
                        }}
                    >
                        Calcular
                    </button>
                </form>
            )}
        </div>
    );
};

export default CalculatorRoute;
