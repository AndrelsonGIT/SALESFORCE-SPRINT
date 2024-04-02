import "./ProductPage1.css"
import Header from "../header/Header.tsx";
import Footer from "../PageOne/Footer.tsx";
const ProductPage3 = ()=>{
    return(
        <>
            <Header></Header>
            <div className="main_container_master">

                <div className="product-container">
                    <div className="product-header">
                        <h1 className="product-title">Sales Marketing</h1>
                        <h2 className="product-subtitle">Atendimento escalável que encanta os clientes.</h2>
                    </div>
                    <div className="product-description">
                        <p>
                            Maximize o ROI e impulsione a eficiência, desde a central de contatos ao atendimento externo,
                            tudo em uma única plataforma.
                        </p>
                    </div>
                    <div className="product-contact">
                        <p>Dúvidas? Ligue para 0800-891-1887</p>
                    </div>
                    <div className="product-image">
                        <img src="https://logowik.com/content/uploads/images/salesforce-service-cloud9830.logowik.com.webp" alt="Imagem do Produto"/>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default ProductPage3;