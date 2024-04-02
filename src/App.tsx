import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageOne from "./components/PageOne/PageOne.tsx";
import PageProducts from "./components/Products/PageProducts.tsx";
import Team from "./components/Team/Team.tsx";
import LogIn from "./components/Login/LogIn.tsx";
import ProductPage1 from "./components/ProductPage/ProductPage1.tsx";
import ProductPage2 from "./components/ProductPage/ProductPage2.tsx";
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import PageProducts from "./components/Products/PageProducts.tsx";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<PageOne/>}></Route>
        <Route path={"/produtos"} element={<PageProducts/>}></Route>
        <Route path={"/equipe"} element={<Team/>}></Route>
        <Route path={"/Login"} element={<LogIn/>}></Route>
        <Route path={"/product1"} element={<ProductPage1/>}></Route>
        <Route path={"/productweb2"} element={<ProductPage2/>}></Route>
    </Routes>
    </BrowserRouter>



    </>
  )
}

export default App
