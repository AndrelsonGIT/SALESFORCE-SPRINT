
import "./CRMComponent.css"
const CRMComponent = ()=>{

    const crmText = "CRM é a sigla usada para Customer Relationship Management e se refere ao conjunto de práticas, estratégias de negócio e tecnologias focadas no relacionamento com o cliente. Confira abaixo tudo que você precisa saber sobre CRM.."
    return(
        <>
            <div className="crm_container">
                <div className="crm_container_text">
                    <h2>O que é CRM?</h2>
                    <p>{crmText}</p>
                    <button>
                        SAIBA MAIS
                    </button>
                </div>
                <img src="https://gestao364.com.br/wp-content/uploads/2023/09/como_contratar_crm.png" alt=""/>
            </div>

        </>
    )
}

export default CRMComponent;
