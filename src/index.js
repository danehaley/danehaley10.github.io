import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import "normalize.css";
import Home from "./pages/home";
import Skills from "./pages/skills";
import Education from "./pages/education";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="skills" element={<Skills />} />
      <Route path="education" element={<Education />} />
    </Routes>
  </BrowserRouter>
);
