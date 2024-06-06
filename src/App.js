import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Landing from "./components/landing/Landing";
import BackToTop from "./components/common/BackToTop";
import Preloder from "./components/common/Preloder.jsx";

function App() {
  return (
    <>
      <Preloder />
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
