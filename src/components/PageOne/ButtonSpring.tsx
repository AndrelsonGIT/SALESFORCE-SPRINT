import React from "react";
import "./ButtonSpring.modules.css"

interface ButtonProps{
    nome : string;
}

const ButtonSpring : React.FC<ButtonProps> = ({nome}) =>{
    return(
        <>
            <button className="button">{nome}</button>
        </>
    )
}
export default ButtonSpring;