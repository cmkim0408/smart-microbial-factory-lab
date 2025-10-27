import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import People from "./pages/People";
import PI from "./pages/people/PI";
import Research from "./pages/Research";
import MicrobialCatalysts from "./pages/research/MicrobialCatalysts";
import ComputationalDesign from "./pages/research/ComputationalDesign";
import AutonomousBioprocessing from "./pages/research/AutonomousBioprocessing";
import EnvironmentalBioprocessing from "./pages/research/EnvironmentalBioprocessing";
import Publications from "./pages/Publications";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/pi" element={<PI />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/microbial-catalysts" element={<MicrobialCatalysts />} />
        <Route path="/research/computational-design" element={<ComputationalDesign />} />
        <Route path="/research/autonomous-bioprocessing" element={<AutonomousBioprocessing />} />
        <Route path="/research/environmental-bioprocessing" element={<EnvironmentalBioprocessing />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
