import "./ProductPage2.css"
import Header from "../header/Header.tsx";
import Footer from "../PageOne/Footer.tsx";
const ProductPage2 = ()=>{
    return(
        <>
            <Header></Header>
            <div className="main_container_master">

                <div className="product-container">
                    <div className="product-header">
                        <h1 className="product-title">Servicce Cloud</h1>
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
                        <img
                            src="https://yt3.googleusercontent.com/ytc/AIdro_lJamH24JE3ERxWIysBtXXKdXlltSj--aOlN4jf=s900-c-k-c0x00ffffff-no-rj"
                            alt="Imagem do Produto"/>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default ProductPage2;