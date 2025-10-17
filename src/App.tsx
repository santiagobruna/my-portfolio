import AboutSection from "./components/AboutSection/index.tsx";
import HeroSection from "./components/Apresentation/index.tsx";
import Navbar from "./components/Navbar";
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
    </>
  );
}
