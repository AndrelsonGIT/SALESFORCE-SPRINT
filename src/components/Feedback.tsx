import "./Feedback.css"
import aspas from "../assets/Group.png"

const Feedback = ()=>{
    const texto :string = "Após a adoção de soluções Salesforce, pudemos trabalhar de forma muito mais objetiva e direcionada graças à qualidade dos dados e insights que as ferramentas nos oferecem."
    return(
        <>
            <div className="feedback_container">
                <img src={aspas} alt=""/>
                <h3 className="feedback_h3">{texto}</h3>
                <div>
                    <img src="" alt=""/>
                </div>
                <div className="feedback_response">
                    <img src="https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/gympass-customers-home.jpg?w=236" alt="logo da empresa Gympass"/>
                    <p className="">MARINA MICHEL, DIRETORA GLOBAL SALES PROJECT DA GYMPASS</p>
                </div>
                <a href="">Veja mais histórias</a>
                <div className="feedback_background">
                    <img
                        src="https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/background-all-sales-products-3.webp?w=1024"
                        alt="fundo salesforce com mascote de pelucia"/>
                </div>

            </div>
        </>
    )
}

export default Feedback