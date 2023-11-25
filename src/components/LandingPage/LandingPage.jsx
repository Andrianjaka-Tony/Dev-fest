import React from "react";
import Hero from "../../components/hero/Hero";
import ScrollText from "../../components/scroll-text/ScrollText";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/nav-bar/NavBar";

function LandingPage({ lenis }) {
  return (
    <>
      <div className="landing-page-container">
        <NavBar lenis={lenis} />
        <Hero
          title="Swift, precise, effortless travel!"
          image="./image/header.png"
          targets={["Velocity", "Precision", "Seamless"]}
        />
        <ScrollText items={["Let's build something from anything together", "-"]} repeat={4} gap={30} duration={30} />
        <Footer image="" />
      </div>
    </>
  );
}

export default LandingPage;
