import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Comparison } from "./components/Comparison";
import { Features } from "./components/Features";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import BackBlur from "./components/BackBlur";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <BackBlur />
        <Hero />
        <Comparison />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
