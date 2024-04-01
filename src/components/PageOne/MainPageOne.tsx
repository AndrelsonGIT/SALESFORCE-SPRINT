import TitleMainOne from "./TitleMainOne.tsx";
import "./MainPageOne.css"
import salesCloud from "../../assets/cloud_salesforce_hdplus.png"
import GroupCards from "../GroupCards.tsx";
import Feedback from "../Feedback.tsx";
import CRMComponent from "./CRMComponent.tsx";
import HorizontalBoxText from "../HorizontalBoxText.tsx";
import SomeQuestion from "../SomeQuestion.tsx";
const MainPageOne = ()=>{
    const titleString:string = "O que é a Salesforce"
    const titleDesc:string = "A Salesforce é uma empresa de softwares que foca na solução de gerenciamento de relacionamento para aproximar empresas e pessoas. É uma plataforma de CRM integrada que oferece a todos os departamentos uma visão única e compartilhada de cada cliente.\n"


    return(
        <>
            <div className="title_main_one">
                <TitleMainOne title={titleString} description={titleDesc}></TitleMainOne>
            </div>
            <img className="cloud_image" src={salesCloud} alt=""/>

            <h2 className="title_card">
                Saiba como a Salesforce ajuda o seu negócio a crescer.
            </h2>
            <div className="group_card_app">
                <GroupCards></GroupCards>
            </div>
            <Feedback></Feedback>
            <div className="container_space"></div>
            <h3 className="main_page_one_h3">Uma variedade de conteúdos e ferramentas está disponível para
                impulsionar o crescimento e o sucesso.</h3>
            <CRMComponent></CRMComponent>
            <div className="horizontal_box_text">
                <HorizontalBoxText></HorizontalBoxText>
            </div>
            <div className="some_question">
                <SomeQuestion></SomeQuestion>
            </div>


        </>

    )
}

export default MainPageOne;
