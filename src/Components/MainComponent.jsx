import Home from "./Pages/Home";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";

const MainComponent = () => {
  return (
    <Routes>
      <Route path="/Abdul_Samad/" element={<Home />} />
      <Route path="/Abdul_Samad/about" element={<About />} />
      <Route path="/Abdul_Samad/contact" element={<Contact />} />
    </Routes>
  );
};

export default MainComponent;
