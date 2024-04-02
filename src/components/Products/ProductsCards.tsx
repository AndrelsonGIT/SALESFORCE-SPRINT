import "./ProductCard.css"
import {Link} from "react-router-dom";
const ProductsCards = ()=>{

    return(
        <>
            <div className="h2_container">
                <h2>Produtos</h2>
            </div>
                <div className="main_container_card">

                    <div className="card_container card_marketing">
                        <img id="marketing_cloud_img" className="sales_img" src="https://images.squarespace-cdn.com/content/v1/5e6cfa89c315535aba12ee9d/1620070273475-4V6FM9CR26S7STAY6X1N/Logo+-+Marketing+Cloud+%281%29.png" alt=""/>
                        <h3 >Marketing Cloudd</h3>
                        <Link to={"/product1"}> <button>SAIBA MAIS</button></Link>
                    </div>

                    <div className="card_container card_sales">
                        <img id="sales_cloud_img" className="sales_img" src="https://yt3.googleusercontent.com/ytc/AIdro_lJamH24JE3ERxWIysBtXXKdXlltSj--aOlN4jf=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                        <h3 >Sales Cloud</h3>
                        <Link to={"/product2"}> <button>SAIBA MAIS</button></Link>
                    </div>

                    <div className="card_container card_service">
                        <img className="sales_img" src="https://logowik.com/content/uploads/images/salesforce-service-cloud9830.logowik.com.webp" alt=""/>
                        <h3 >Service Cloud</h3>
                        <Link to={"/product2"}> <button>SAIBA MAIS</button></Link>
                    </div>
                </div>



        </>
    )
}

export default ProductsCards;