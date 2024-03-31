import TitleMainOne from "./TitleMainOne.tsx";
import "./MainPageOne.css"
import salesCloud from "../../assets/cloud_salesforce_hdplus.png"
const MainPageOne = ()=>{
    const titleString = "O que é a Salesforce"
    const titleDesc = "A Salesforce é uma empresa de softwares que foca na solução de gerenciamento de relacionamento para aproximar empresas e pessoas. É uma plataforma de CRM integrada que oferece a todos os departamentos uma visão única e compartilhada de cada cliente.\n"

    return(
        <>
            <div className="title_main_one">
                <TitleMainOne title={titleString} description={titleDesc} ></TitleMainOne>
            </div>
            <img className="cloud_image" src={salesCloud} alt=""/>

            <h2 className="title_card">
                Saiba como a Salesforce ajuda o seu negócio a crescer.
            </h2>

        </>

    )
}

export default MainPageOne;
