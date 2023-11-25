import Lenis from "@studio-freight/lenis";
import "./reset.scss";
import Hero from "./components/hero/Hero";
import ScrollText from "./components/scroll-text/ScrollText";

function App() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Hero
        title="Let's build something from anything together."
        image="./image/header.png"
        targets={["Tsotra", "Marina", "Mahomby"]}
      />
      <ScrollText
        items={["Let's build something from anything together", "-"]}
        repeat={4}
        gap={30}
        duration={30}
      />
    </>
  );
}

export default App;
