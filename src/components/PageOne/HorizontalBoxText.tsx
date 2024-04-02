import "./HorizontalBoxTest.css"
const HorizontalBoxText = ()=>{
    const text:string = "Experimente o Salesforce gratuitamente. Não é necessário cartão de crédito nem instalação de software."
    return(
        <div className="container_horizontal_box">
            <div className="horizontal_p">
                <p>{text}</p>
            </div>

            <button>Começar teste gratuito</button>
        </div>
    )
}

export default HorizontalBoxText;