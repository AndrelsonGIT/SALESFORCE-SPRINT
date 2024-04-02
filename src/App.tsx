import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageOne from "./components/PageOne/PageOne.tsx";
import PageProducts from "./components/Products/PageProducts.tsx";
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import PageProducts from "./components/Products/PageProducts.tsx";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<PageOne/>}></Route>
        <Route path={"/produtoss"} element={<PageProducts/>}></Route>
    </Routes>
    </BrowserRouter>



    </>
  )
}

export default App
