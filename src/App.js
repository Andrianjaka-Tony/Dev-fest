import Lenis from "@studio-freight/lenis";
import "./reset.scss";
import Hero from "./components/hero/Hero";
import ScrollText from "./components/scroll-text/ScrollText";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav-bar/NavBar";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/login/Login";
import Map from "./components/map/Map";
import { useEffect } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Scroller from "./components/Scroller/Scroller";

function App() {
  const lenis = new Lenis();

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  useEffect(() => {
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Scroller lenis={lenis} />
      <Routes>
        <Route path="/" element={<LandingPage lenis={lenis} />} />
        <Route path="/login" element={<Login lenis={lenis} />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </>
  );
}

export default App;
