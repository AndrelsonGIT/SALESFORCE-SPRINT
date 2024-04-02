import Card from "./Card.tsx";

import cardPequenasEmpresas from "../../assets/pequenas_empresas_card.webp";
import cardVendas from "../../assets/vendas_card.webp";
import cardAtendimento from "../../assets/atendimento_card.webp"
import "./GroupCards.css"
const GroupCards = ()=>{
    return(
        <>
            <div className="group_card_container_center">
                <div className="group_cards_container">
                    <Card nome="Pequenas empresaas"
                          description="Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo."
                          img={cardPequenasEmpresas}></Card>
                    <Card nome="Vendas" description="Feche mais negócios e acelere o crescimento com o CRM nº1."
                          img={cardVendas}></Card>
                    <Card nome="Atendimento" description="Gaste menos com serviços escaláveis que os clientes adoram."
                          img={cardAtendimento}></Card>
                </div>
            </div>


        </>
    )
}

export default GroupCards;