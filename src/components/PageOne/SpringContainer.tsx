import "./SpringContainer.css"
import salesforceMainMenu from "../../assets/salesforce_main_menu.jpeg"
import ButtonSpring from "./ButtonSpring.tsx";
import {Link} from "react-router-dom";
const SpringContainer = () => {

    return (
        <>
            <div className="container_sales_menu">
                <h1>A salesforce faz a sua empresa mais eficiente</h1>
                <img className="salesforce_main_menu_img" src={salesforceMainMenu} alt="salesforce_main_menu"/>
                <div className="container_div_buttons">
                    <Link to={"/equipe"}> <ButtonSpring nome="Integrantes"></ButtonSpring></Link>
                    <Link to={"/produtos"}> <ButtonSpring nome="Produtos"></ButtonSpring></Link>
                </div>
            </div>
        </>
    );
};

export default SpringContainer;
