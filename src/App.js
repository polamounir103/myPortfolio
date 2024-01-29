import "./App.css";
import Main from "./componenets/Main";
import MainHelpBtn from "./componenets/MainHelpBtn";
import Navbar from "./componenets/Navbar";
import About from "./componenets/About";
import Skills from "./componenets/Skills";
import ProjectsSection from "./componenets/ProjectsSection";
import Footer from "./componenets/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  return (
    <div className="App">
      <MainHelpBtn />
      <Navbar />
      <Main />
      <About />
      <ProjectsSection />
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;
