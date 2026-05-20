import { createGlobalStyle } from "styled-components";
import variables from "./Variables";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary: #0a0a0b;
    --bg-secondary: #111113;
    --bg-glass: rgba(255, 255, 255, 0.04);
    --bg-glass-hover: rgba(255, 255, 255, 0.08);
    --border-glass: rgba(255, 255, 255, 0.08);
    --bg-card: rgba(17, 17, 19, 0.92);
    --text-primary: #ffffff;
    --text-secondary: #a1a1aa;
    --text-muted: #71717a;
    --purple-glow: rgba(139, 92, 246, 0.4);
    --purple-glow-strong: rgba(139, 92, 246, 0.6);
    --nav-bg: rgba(10, 10, 11, 0.88);
    --menu-bg: rgba(10, 10, 11, 0.97);
    --hero-glow-1: rgba(139, 92, 246, 0.35);
    --hero-glow-2: rgba(59, 130, 246, 0.12);
    --shadow-card: 0 8px 32px rgba(0, 0, 0, 0.4);
    --ring-dashed: rgba(139, 92, 246, 0.3);
    --image-border: rgba(139, 92, 246, 0.3);
    --tech-pill-bg: rgba(139, 92, 246, 0.15);
    --tech-pill-border: rgba(139, 92, 246, 0.25);
    --cta-gradient: rgba(139, 92, 246, 0.15);
  }

  [data-theme="light"] {
    --bg-primary: #ffffff;
    --bg-secondary: #f4f4f5;
    --bg-glass: rgba(0, 0, 0, 0.03);
    --bg-glass-hover: rgba(0, 0, 0, 0.06);
    --border-glass: rgba(0, 0, 0, 0.1);
    --bg-card: rgba(255, 255, 255, 0.95);
    --text-primary: #18181b;
    --text-secondary: #52525b;
    --text-muted: #a1a1aa;
    --purple-glow: rgba(139, 92, 246, 0.18);
    --purple-glow-strong: rgba(139, 92, 246, 0.3);
    --nav-bg: rgba(255, 255, 255, 0.92);
    --menu-bg: rgba(255, 255, 255, 0.98);
    --hero-glow-1: rgba(139, 92, 246, 0.1);
    --hero-glow-2: rgba(59, 130, 246, 0.06);
    --shadow-card: 0 8px 32px rgba(0, 0, 0, 0.08);
    --ring-dashed: rgba(139, 92, 246, 0.25);
    --image-border: rgba(139, 92, 246, 0.35);
    --tech-pill-bg: rgba(139, 92, 246, 0.1);
    --tech-pill-border: rgba(139, 92, 246, 0.2);
    --cta-gradient: rgba(139, 92, 246, 0.08);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  #root {
    width: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${variables.fontFamily};
    background-color: ${variables.bgPrimary};
    color: ${variables.textPrimary};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  ::selection {
    background: ${variables.purplePrimary};
    color: white;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${variables.bgSecondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${variables.purplePrimary};
    border-radius: 4px;
  }

  a {
    color: inherit;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;
