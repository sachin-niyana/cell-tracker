import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Landing from "./components/landing/Landing";
import BackToTop from "./components/common/BackToTop";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden">
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
