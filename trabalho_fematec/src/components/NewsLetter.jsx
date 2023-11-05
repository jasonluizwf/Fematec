import { React, useState } from "react";
import emailjs from "@emailjs/browser";

const NewsLetter = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail(e) {
       e.preventDefault();

        if(name === "" || email === "" || message === "") {
            alert("Preencha todos os campos!")
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }


        emailjs.send("service_9b64c5p", "template_1kxhc3i", templateParams, "7uEWcirdu5EOBengS")
        .then((response) => {
            console.log("Email enviado: ", response.status, response.text);
            setName("");
            setEmail("");
            setMessage("");
        }, (erro) => {
            console.log("error", erro)
        })
}

    return (
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-4">
                <div className="lg:col-span-2">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Possui interessa em nossos produtos?
                    </h1>
                    <p>Nos envie uma mensagem!</p>
                </div>
                <div className="my-4">
                    <div className="flex  flex-col sm:flex-row items-center justify-between w-full text-black">
                        <form className="form" onSubmit={sendEmail}>
                            <input
                                className="p-3 m-3 flex w-full rounded-md"
                                type="text"
                                placeholder="Digite seu nome: " 
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                />

                            <input
                                className="p-3 m-3 flex w-full rounded-md"
                                type="email"
                                placeholder="Digite seu email:" 
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                />

                            <textarea
                                className="p-3 m-3 flex w-full rounded-md"
                                type="text"
                                placeholder="Digite uma mensagem: " 
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                />

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