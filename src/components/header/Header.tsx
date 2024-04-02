import "./Header.modules.css"
import SalesforceLogo from "../../assets/Salesforce.com_logo.svg.png"; // Import image files
import downIcon from "../../assets/down (1).png"
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <>
            <header>
                <div className="header_container">
                    <Link to={"/"}> <img src={SalesforceLogo} className="header_img" alt="Salesforce Logo"/></Link>
                    <div >
                        <ul className="header_ul">
                            <li className="header_li"><Link to={"/produtos"}> Por que a Salesforce </Link><img  src={downIcon} alt="Seta para baixo"/></li>
                            <li className="header_li "><Link to={"/produtos"}><a className="header_a" href="">Produtos</a></Link><img src={downIcon}
                                                                                                        alt="Seta para baixo"/></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;