// import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/mainPage";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/detailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
