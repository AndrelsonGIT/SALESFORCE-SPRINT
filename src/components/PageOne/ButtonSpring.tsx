import React from "react";
import "./ButtonSpring.css"

interface ButtonProps{
    nome : string;
}

const ButtonSpring : React.FC<ButtonProps> = ({nome}) =>{
    return(
        <>
            <button className="button_spring">{nome}</button>
        </>
    )
}
export default ButtonSpring;