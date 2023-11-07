import React, { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    const navigate = useNavigate();

    const handleHero=() =>{
        return navigate("/");
    }


    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">EcoLamp</h1>
            <ul className="uppercase p-4"></ul>
            <ul className="hidden md:flex">
                <button onClick={handleHero} className="p-4 hover:text-green-400" >Inicio</button>
                <button className="p-4 hover:text-green-400">Contato</button>
            </ul>

            <div onClick={handleNav} className="fixed right-4 top-4 block md:hidden">
                {nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600 ">Inicio</li>
                    <li className="p-4">Contato</li>
                </ul>
            </div>

        </div>
    )
}

export default NavBar;