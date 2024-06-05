import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
