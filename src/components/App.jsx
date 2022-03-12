import About from "./About";
import Bumper from "./Bumper";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import TopNav from "./TopNav";

function App() {
  return (
    <div className="bg-rose-50">
      <TopNav />
      <Hero />
      <Bumper url="bg-[url('src/public/bumper_bars_bg.svg')]" />
      <About />
      <Bumper url="bg-[url('src/public/bumper_bars_bg_reversed.svg')]" />
      <Projects />
      <Footer />
      HELLo
    </div>
  );
}

export default App;
