import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/NavBar";
import HomePage from "./Pages/HomePages";
import DetailsPage from "./Pages/DetailsPage";
import TypesPage from "./Pages/TypesPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/DetailsPage/:id" element={<DetailsPage></DetailsPage>}></Route>
          <Route path="/types/:type" element={<TypesPage></TypesPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
