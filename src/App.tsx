import Header from "./components/header/Header.tsx";
import SpringContainer from "./components/PageOne/SpringContainer.tsx";
import MainPageOne from "./components/PageOne/MainPageOne.tsx";
import "./App.css"
import Footer from "./components/PageOne/Footer.tsx";
function App() {

  return (
    <>
        <Header></Header>
        <SpringContainer></SpringContainer>
        <MainPageOne></MainPageOne>
        <Footer></Footer>
    </>
  )
}

export default App
