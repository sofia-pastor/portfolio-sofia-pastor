import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

import "./styles/App.css";

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}
