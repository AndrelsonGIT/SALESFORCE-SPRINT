import "./SpringContainer.css"
import salesforceMainMenu from "../../assets/salesforce_main_menu.jpeg"
import ButtonSpring from "./ButtonSpring.tsx";
const SpringContainer = () => {

    return (
        <>
            <div className="container_sales_menu">
                <h1>A salesforce faz a sua empresa mais eficiente</h1>
                <img className="salesforce_main_menu_img" src={salesforceMainMenu} alt="salesforce_main_menu"/>
                <div className="container_div_buttons">
                    <ButtonSpring nome="Por que a Salesforce"></ButtonSpring>
                    <ButtonSpring nome="Produtos"></ButtonSpring>
                </div>
            </div>
        </>
    );
};

export default SpringContainer;
