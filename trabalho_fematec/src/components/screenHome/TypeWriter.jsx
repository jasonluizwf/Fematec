import React from "react";
import { useTypewriter } from "react-simple-typewriter";


const TypeWriter = () => {

    const [text] = useTypewriter({
        words: ["LED", "FLUORESCENTE", "INCANDESCENTE"],
        loop: {}
    })

    return (
        <div>
            {text}
        </div>
    )
}

export default TypeWriter;