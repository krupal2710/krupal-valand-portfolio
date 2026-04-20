import logo from "./logo.svg";
import "./App.css";
import Header from "./components/cHeader";
import Home from "./components/cHome";
import Services from "./components/cServices";
import Work from "./components/cWorks";
import Resume from "./components/cResume";
import Skills from "./components/cSkills";
import Contact from "./components/cContact";
import Footer from "./components/cFooter";

function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <Services /> */}
      <Work />
      <Resume />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
