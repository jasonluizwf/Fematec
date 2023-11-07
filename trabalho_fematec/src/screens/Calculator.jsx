import React from "react";
import NavBar from "../components/NavBar";
import FieldCalculator from "../components/screenCalculator/FieldCalculator";


const Calculator = () => {
    return (
        <div>
            <NavBar/>
            <FieldCalculator/>
            {/* <ShowResult/> */}
        </div>
    )
}

export default Calculator;

