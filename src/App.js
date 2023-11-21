import Lenis from "@studio-freight/lenis";
import "./reset.scss";
import Hero from "./components/hero/Hero";

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
      />
    </>
  );
}

export default App;
