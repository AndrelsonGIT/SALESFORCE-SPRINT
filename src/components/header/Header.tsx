import "./Header.modules.css"
import SalesforceLogo from "../../assets/Salesforce.com_logo.svg.png"; // Import image files
import downIcon from "../../assets/down (1).png"

const Header = () => {
    return (
        <>
            <header>
                <div className="header_container">
                    <img src={SalesforceLogo} className="header_img" alt="Salesforce Logo"/>
                    <div >
                        <ul className="header_ul">
                            <li className="header_li"><a className="header_a" href="">Por que a Salesforce</a><img  src={downIcon}
                                                                        alt="Seta para baixo"/></li>
                            <li className="header_li "><a className="header_a" href="">Produtos</a><img src={downIcon}
                                                                               alt="Seta para baixo"/></li>
                        </ul>
                    </div>
                </div>


            </header>
        </>
    )
}

export default Header;