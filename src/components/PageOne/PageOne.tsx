import Header from "../header/Header.tsx";
import SpringContainer from "./SpringContainer.tsx";
import MainPageOne from "./MainPageOne.tsx";
import Footer from "./Footer.tsx";


const PageOne = ()=>{
    return(
        <>
            <div>
                <Header></Header>
                <SpringContainer></SpringContainer>
                <MainPageOne></MainPageOne>
                <Footer></Footer>
            </div>
        </>
    )
}

export default PageOne;