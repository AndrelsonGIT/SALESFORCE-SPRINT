import Header from "./components/header/Header.tsx";
import SpringContainer from "./components/PageOne/SpringContainer.tsx";
import MainPageOne from "./components/PageOne/MainPageOne.tsx";
import GroupCards from "./components/GroupCards.tsx";
import "./App.css"
import Feedback from "./components/Feedback.tsx";
import cardPequenasEmpresas from "./assets/pequenas_empresas_card.webp";
import Card from "./components/Card.tsx";
function App() {

  return (
    <>
        <Header></Header>
        <SpringContainer></SpringContainer>
        <MainPageOne></MainPageOne>
        <div className="group_card_app">
            <GroupCards></GroupCards>
        </div>
    </>
  )
}

export default App
