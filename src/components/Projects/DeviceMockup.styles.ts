import styled from "styled-components";

const MOCKUP_HEIGHT = "176px";
const MOCKUP_DEVICE_MAX_WIDTH = "268px";

export const MockupStage = styled.div`
  width: 100%;
  height: ${MOCKUP_HEIGHT};
  max-height: ${MOCKUP_HEIGHT};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;
  background: radial-gradient(
    ellipse 80% 70% at 50% 50%,
    rgba(139, 92, 246, 0.08) 0%,
    transparent 70%
  );
`;

export const StageImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  filter: drop-shadow(var(--mockup-drop));
`;

export const LaptopFrame = styled.div`
  width: 100%;
  max-width: ${MOCKUP_DEVICE_MAX_WIDTH};
  height: 100%;
  max-height: ${MOCKUP_HEIGHT};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LaptopScreen = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  max-height: calc(${MOCKUP_HEIGHT} - 13px);
  flex-shrink: 0;
  background: #0c0c0e;
  border: 2px solid #2a2a32;
  border-radius: 10px 10px 4px 4px;
  overflow: hidden;
  box-shadow: var(--mockup-shadow);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
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
  max-width: 240px;
  height: 100%;
  max-height: ${MOCKUP_HEIGHT};
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
  width: 96px;
  max-width: 38%;
  height: 168px;
  max-height: 100%;
  margin: 0 auto;
  background: linear-gradient(145deg, #1c1c22, #121216);
  border: 2px solid #3a3a48;
  border-radius: 22px;
  padding: 8px 6px 10px;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.04),
    0 12px 28px rgba(0, 0, 0, 0.45);
  opacity: ${({ $opacity }) => $opacity ?? 1};
  z-index: ${({ $z }) => $z ?? 1};
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    flex-shrink: 0;
    width: 40px;
    height: 4px;
    margin: 0 auto 6px;
    background: #0a0a0c;
    border-radius: 4px;
  }
`;

export const PhoneScreen = styled.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  border-radius: 14px;
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
  max-width: ${MOCKUP_DEVICE_MAX_WIDTH};
  height: 100%;
  max-height: ${MOCKUP_HEIGHT};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: #141418;
  border: 2px solid #2a2a32;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--mockup-shadow);
`;

export const DesktopBar = styled.div`
  display: flex;
  gap: 5px;
  padding: 8px 10px;
  flex-shrink: 0;
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
  flex: 1;
  min-height: 0;
  background: #0c0c0e;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
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
