import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-paper text-warm-600">
      <Hero />
      <About />
      <Contact />
    </div>
  );
};

export default App;
