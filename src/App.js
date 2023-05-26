// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Slider from './Component/Slider/Slider';
import MainContainer from "./Component/MainContainer/MainContainer";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <div>
        <MainContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
