import React from "react";
import "./TitleMainOne.css"

interface TitleDescription{
    title:string,
    description: string
}

const TitleMainOne : React.FC<TitleDescription> = ({title, description})=>{
    return(
        <div className="container">
            <div>
                <h2 className="title_h2">{title}</h2>
                <p className="title_p">{description}</p>
            </div>
        </div>

    )
}

export default TitleMainOne;
