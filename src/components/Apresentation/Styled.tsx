import styled, { keyframes } from "styled-components";
import variables from "../../style/Variables";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`;

export const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: calc(${variables.navHeight} + 2rem) 0 4rem;
  overflow: hidden;

  @media (max-width: 900px) {
    min-height: auto;
    justify-content: flex-start;
    padding-bottom: 2.5rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: -20%;
    right: 5%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--hero-glow-1) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 10%;
    left: 5%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--hero-glow-2) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const HeroInner = styled.div`
  width: 100%;
  max-width: ${variables.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  z-index: 1;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
    padding: 0 1.25rem 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  max-width: 560px;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1rem;
  background: ${variables.bgGlass};
  border: 1px solid ${variables.borderGlass};
  border-radius: 50px;
  font-size: 0.85rem;
  color: ${variables.textSecondary};
  margin-bottom: 1.25rem;
`;

export const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  color: ${variables.textPrimary};
`;

export const Subtitle = styled.h2`
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 600;
  color: ${variables.textSecondary};
  margin-bottom: 1.25rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${variables.textSecondary};
  margin-bottom: 2rem;
  max-width: 480px;

  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 900px) {
    justify-content: center;
    margin-bottom: 0.5rem;
  }
`;

export const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: ${variables.bgGlass};
  border: 1px solid ${variables.borderGlass};
  color: ${variables.textSecondary};
  font-size: 1.1rem;
  transition: color ${variables.transition}, border-color ${variables.transition},
    transform ${variables.transition}, box-shadow ${variables.transition};

  &:hover {
    color: ${variables.purpleLight};
    border-color: ${variables.purplePrimary};
    transform: translateY(-3px);
    box-shadow: 0 4px 16px ${variables.purpleGlow};
  }
`;

export const VisualWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 480px;
  min-height: 440px;
  overflow: visible;

  @media (max-width: 900px) {
    min-width: 100%;
    min-height: 340px;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 520px) {
    min-height: 300px;
  }
`;

export const OrbitArea = styled.div`
  position: relative;
  width: 340px;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media (max-width: 900px) {
    width: 280px;
    height: 280px;
  }
`;

export const Ring = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: ${variables.purplePrimary};
  border-right-color: ${variables.purpleLight};
  animation: ${rotate} 8s linear infinite;
  box-shadow: 0 0 40px ${variables.purpleGlow};
`;

export const RingInner = styled.div`
  position: absolute;
  width: 88%;
  height: 88%;
  border-radius: 50%;
  border: 1px dashed var(--ring-dashed);
  animation: ${rotate} 12s linear infinite reverse;
`;

export const ProfileImage = styled.img`
  width: 72%;
  height: 72%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--image-border);
  box-shadow: 0 0 60px ${variables.purpleGlow};
  position: relative;
  z-index: 5;
`;

export const FloatingIcon = styled.div<{
  $top: string;
  $left?: string;
  $right?: string;
  $delay?: number;
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left ?? "auto"};
  right: ${({ $right }) => $right ?? "auto"};
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${variables.bgGlass};
  backdrop-filter: blur(8px);
  border: 1px solid ${variables.borderGlass};
  border-radius: ${variables.radiusMd};
  font-size: 1.3rem;
  z-index: 6;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${({ $delay }) => ($delay ?? 0) * 0.5}s;
  box-shadow: var(--shadow-card);
`;

export const ExperienceCard = styled.div`
  position: absolute;
  bottom: 12%;
  left: 0;
  transform: translateX(-55%);
  padding: 0.85rem 1.1rem;
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  border: 1px solid ${variables.borderGlass};
  border-radius: ${variables.radiusMd};
  z-index: 4;
  min-width: 155px;
  box-shadow: var(--shadow-card);

  @media (max-width: 900px) {
    transform: translateX(-25%);
    bottom: 8%;
    left: 2%;
  }

  @media (max-width: 520px) {
    transform: none;
    left: auto;
    right: 0;
    bottom: 0;
  }
`;

export const ExpNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${variables.purpleLight};
  line-height: 1;
`;

export const ExpLabel = styled.div`
  font-size: 0.7rem;
  color: ${variables.textSecondary};
  margin-top: 0.2rem;
`;

export const ExpChart = styled.svg`
  margin-top: 0.5rem;
  width: 100%;
  height: 30px;

  .chart-line {
    stroke: ${variables.purplePrimary};
    stroke-width: 2;
    fill: none;
    stroke-dasharray: 120;
    stroke-dashoffset: 120;
    animation: drawLine 1.5s ease forwards 0.5s;
  }

  @keyframes drawLine {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export const CodeWindow = styled.div`
  position: absolute;
  top: 2%;
  right: 0;
  transform: translateX(55%);
  width: 195px;
  padding: 0.75rem 1rem;
  background: var(--bg-card);
  border: 1px solid ${variables.borderGlass};
  border-radius: ${variables.radiusMd};
  font-family: "Fira Code", "Consolas", monospace;
  font-size: 0.65rem;
  line-height: 1.5;
  z-index: 4;
  box-shadow: var(--shadow-card);

  @media (max-width: 900px) {
    transform: translateX(30%);
    top: 0;
    width: 175px;
    font-size: 0.6rem;
  }

  @media (max-width: 520px) {
    transform: none;
    right: auto;
    left: 0;
    top: 0;
  }
`;

export const CodeDots = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 0.5rem;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;

    &:nth-child(1) {
      background: #ef4444;
    }
    &:nth-child(2) {
      background: #eab308;
    }
    &:nth-child(3) {
      background: #22c55e;
    }
  }
`;

export const CodeLine = styled.div`
  color: ${variables.textSecondary};

  .keyword {
    color: ${variables.purpleLight};
  }
  .string {
    color: #34d399;
  }
  .func {
    color: #60a5fa;
  }
`;

export const ScrollIndicator = styled.a`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${variables.textMuted};
  font-size: 0.75rem;
  text-decoration: none;
  z-index: 2;
  animation: ${pulse} 2s ease-in-out infinite;
  pointer-events: auto;

  &.scroll-desktop {
    @media (max-width: 900px) {
      display: none;
    }
  }

  &.scroll-mobile {
    display: none;

    @media (max-width: 900px) {
      display: flex;
      position: relative;
      bottom: auto;
      left: auto;
      transform: none;
      margin-top: 1.5rem;
      width: 100%;
      animation: none;
      opacity: 1;
    }
  }

  @media (max-width: 520px) {
    font-size: 0.7rem;
  }

  .mouse {
    width: 22px;
    height: 34px;
    border: 2px solid ${variables.textMuted};
    border-radius: 12px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 6px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 8px;
      background: ${variables.purpleLight};
      border-radius: 2px;
      animation: ${bounce} 1.5s ease-in-out infinite;
    }

    @media (max-width: 900px) {
      width: 20px;
      height: 30px;
    }
  }
`;
