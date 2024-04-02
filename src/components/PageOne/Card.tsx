import React from "react";
import "./Card.css"

interface cardProps{
    img:string;
    nome: string;
    description: string;

}
const Card : React.FC<cardProps> = ({img, nome, description})=>{

    return(
        <>
            <div className="container_card">
                <img className="card_img" src={img} alt="Card pequenas empresas"/>
                    <h3 className="h2_card">{nome}</h3>
                    <p className="paragrafo_card">{description}</p>
            </div>
        </>
    )
}

export default Card;