import Lenis from "@studio-freight/lenis";
import "./reset.scss";

function App() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return <div className="App">Hello world</div>;
}

export default App;
