import "./Header.modules.css"
import SalesforceLogo from "../../assets/Salesforce.com_logo.svg.png"; // Import image files
import downIcon from "../../assets/down (1).png"
const downIconStyle = "down_img"

const Header = () => {
    return (
        <>
            <header>
                <div className="header_container">
                    <img src={SalesforceLogo} alt="Salesforce Logo"/> {/* Use imported image */}
                    <div >
                        <ul>
                            <li><a href="">Por que a Salesforce</a><img className={downIconStyle} src={downIcon}
                                                                        alt="Seta para baixo"/></li>
                            <li className='liLeft'><a href="">Produtos</a><img className={downIconStyle} src={downIcon}
                                                                               alt="Seta para baixo"/></li>
                        </ul>
                    </div>
                </div>


            </header>
        </>
    )
}

export default Header;