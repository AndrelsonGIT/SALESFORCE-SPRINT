import "./SpringContainer.modules.css"
import salesforceMainMenu from "../../assets/salesforce_main_menu.jpeg"
import ButtonSpring from "./ButtonSpring.tsx";
const SpringContainer = () => {

    return (
        <>
            <img className="salesforceMainMenu" src={salesforceMainMenu} alt="salesforce_main_menu"/>
            <div>
                {/*TODO: FAZER O EFEITO DE DIGITAÇÃO AQUI*/}
                <div className="container_sales_menu">
                    <h1>A salesforce faz a sua empresa mais eficiente</h1>
                    <div className="container_div_buttons">
                        <ButtonSpring nome="Por que a Salesforce"></ButtonSpring>
                        <ButtonSpring nome="Produtos"></ButtonSpring>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpringContainer;
