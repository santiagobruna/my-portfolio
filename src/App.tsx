import AboutSection from "./components/AboutSection/index.tsx";
import HeroSection from "./components/Apresentation/index.tsx";
import { Footer } from "./components/Footer/index.tsx";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/index.tsx";
import { Services } from "./components/ServicesOffer/index.tsx";
import Skills from "./components/Skills/index.tsx";
import { GlobalStyle } from './style/GlobalStyle.ts'

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <Skills/>
      <Services/>
      <Projects/>
      <Footer/>
    </>
  );
}
