import Header from "./components/header/Header";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Experiences from "./components/experiences/Experiences";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Experiences />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
