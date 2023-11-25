import Lenis from "@studio-freight/lenis";
import "./reset.scss";
import Hero from "./components/hero/Hero";
import ScrollText from "./components/scroll-text/ScrollText";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav-bar/NavBar";
import { Route,Routes } from "react-router-dom";
import {Login} from "./components/login/Login";
import Map from "./components/map/Map";

function LandingPage() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return <>
    <div className="landing-page-container">
    <NavBar/>
    <Hero
        title="Swift, precise, effortless travel!"
        image="./image/header.png"
        targets={["Velocity", "Precision", "Seamless"]}
      />
      <ScrollText
        items={["Let's build something from anything together", "-"]}
        repeat={4}
        gap={30}
        duration={30}
      />
      <Footer 
        image=""
      />
    </div>
  </>
}
function HomePage() {
  return <>

  </>
}

function App() {
  

  return <>
    {/* <Routes>
        <Route path="/" element={<HomePage />} />
    </Routes> */}

    {/* <LandingPage/> */}
    {/* <Login/> */}
    <Map/>
  </> 
  
}

export default App;
