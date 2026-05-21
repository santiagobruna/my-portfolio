import styled from "styled-components";

export const MockupStage = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0;
  background: radial-gradient(
    ellipse 80% 70% at 50% 50%,
    rgba(139, 92, 246, 0.08) 0%,
    transparent 70%
  );
`;

export const StageImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.45));
`;

export const LaptopFrame = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LaptopScreen = styled.div`
  width: 100%;
  max-width: 100%;
  aspect-ratio: 16 / 10;
  background: #0c0c0e;
  border: 2px solid #2a2a32;
  border-radius: 10px 10px 4px 4px;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    margin: 0 auto;
  }
`;

export const LaptopBase = styled.div`
  width: 78%;
  height: 8px;
  margin: 5px auto 0;
  background: linear-gradient(180deg, #2a2a32, #1a1a1e);
  border-radius: 0 0 6px 6px;
  flex-shrink: 0;
`;

export const PhonesStack = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhoneFrame = styled.div<{
  $tilt?: number;
  $offset?: number;
  $opacity?: number;
  $scale?: number;
  $z?: number;
}>`
  position: ${({ $offset }) => ($offset !== undefined ? "absolute" : "relative")};
  left: ${({ $offset }) => ($offset !== undefined ? `calc(50% + ${$offset}px)` : "auto")};
  transform: ${({ $tilt, $scale, $offset }) =>
    $offset !== undefined
      ? `translateX(-50%) rotate(${$tilt ?? 0}deg) scale(${$scale ?? 1})`
      : `rotate(${$tilt ?? 0}deg) scale(${$scale ?? 1})`};
  width: 112px;
  max-width: 42%;
  height: 210px;
  max-height: 200px;
  margin: 0 auto;
  background: linear-gradient(145deg, #1c1c22, #121216);
  border: 2px solid #3a3a48;
  border-radius: 24px;
  padding: 10px 7px 12px;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.04),
    0 16px 36px rgba(0, 0, 0, 0.55);
  opacity: ${({ $opacity }) => $opacity ?? 1};
  z-index: ${({ $z }) => $z ?? 1};
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    flex-shrink: 0;
    width: 44px;
    height: 5px;
    margin: 0 auto 8px;
    background: #0a0a0c;
    border-radius: 4px;
  }
`;

export const PhoneScreen = styled.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    margin: 0 auto;
  }
`;

export const DesktopFrame = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  background: #141418;
  border: 2px solid #2a2a32;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
`;

export const DesktopBar = styled.div`
  display: flex;
  gap: 5px;
  padding: 8px 10px;
  background: #1a1a1f;
  border-bottom: 1px solid #2a2a32;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3f3f4a;

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

export const DesktopScreen = styled.div`
  height: 160px;
  background: #0c0c0e;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    margin: 0 auto;
  }
`;

export const SupportLayout = styled.div`
  display: grid;
  grid-template-columns: 38% 1fr;
  height: 100%;
  font-size: 0.65rem;
`;

export const SupportSidebar = styled.div`
  padding: 10px 8px;
  border-right: 1px solid #2a2a32;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SupportMain = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const SupportLine = styled.div<{ $w: string; $highlight?: boolean }>`
  height: 8px;
  width: ${({ $w }) => $w};
  border-radius: 4px;
  background: ${({ $highlight }) =>
    $highlight ? "rgba(59, 130, 246, 0.5)" : "rgba(255,255,255,0.08)"};
`;

export const SupportBadge = styled.span`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 4px 8px;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.2);
  color: #93c5fd;
  font-size: 0.6rem;
`;
