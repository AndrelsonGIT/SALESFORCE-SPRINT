import "./LogIn.css"
import Header from "../header/Header.tsx";
import Footer from "../PageOne/Footer.tsx";
const LogIn = ()=>{
    return(
        <>
            <Header></Header>
            <div className="main_container_login">


        <div className="login-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png" alt="Logo da Empresa" className="logo" />
        <form className="login-form">
            <h2>Login</h2>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="input-group">
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="login-button">Entrar</button>
        </form>
        </div>
            </div>
        <Footer></Footer>
        </>
    )
}

export default LogIn