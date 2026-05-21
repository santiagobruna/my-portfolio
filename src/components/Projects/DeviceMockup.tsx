import type { MockupVariant } from "../../constants/Projects/projectsData";
import * as S from "./DeviceMockup.styles";

interface DeviceMockupProps {
  variant: MockupVariant;
  image?: string;
  alt: string;
}

function SupportDesktopUI() {
  return (
    <S.SupportLayout>
      <S.SupportSidebar>
        <S.SupportLine $w="70%" />
        <S.SupportLine $w="55%" />
        <S.SupportLine $w="80%" />
        <S.SupportLine $w="45%" />
      </S.SupportSidebar>
      <S.SupportMain>
        <S.SupportLine $w="40%" $highlight />
        <S.SupportLine $w="90%" />
        <S.SupportLine $w="75%" />
        <S.SupportBadge>Em análise</S.SupportBadge>
      </S.SupportMain>
    </S.SupportLayout>
  );
}

function PhoneMockup({ image, alt }: { image: string; alt: string }) {
  return (
    <S.MockupStage>
      <S.PhoneFrame $tilt={0}>
        <S.PhoneScreen>
          <img src={image} alt={alt} />
        </S.PhoneScreen>
      </S.PhoneFrame>
    </S.MockupStage>
  );
}

function LaptopMockup({ image, alt }: { image: string; alt: string }) {
  return (
    <S.MockupStage>
      <S.LaptopFrame>
        <S.LaptopScreen>
          <img src={image} alt={alt} />
        </S.LaptopScreen>
        <S.LaptopBase />
      </S.LaptopFrame>
    </S.MockupStage>
  );
}

export default function DeviceMockup({ variant, image, alt }: DeviceMockupProps) {
  if (variant === "stage" && image) {
    return (
      <S.MockupStage>
        <S.StageImage src={image} alt={alt} />
      </S.MockupStage>
    );
  }

  if (variant === "phone" && image) {
    return <PhoneMockup image={image} alt={alt} />;
  }

  if (variant === "laptop" && image) {
    return <LaptopMockup image={image} alt={alt} />;
  }

  if (variant === "desktop") {
    return (
      <S.MockupStage>
        <S.DesktopFrame>
          <S.DesktopBar>
            <span />
            <span />
            <span />
          </S.DesktopBar>
          <S.DesktopScreen>
            {image ? <img src={image} alt={alt} /> : <SupportDesktopUI />}
          </S.DesktopScreen>
        </S.DesktopFrame>
      </S.MockupStage>
    );
  }

  if (variant === "phones-stack" && image) {
    return (
      <S.MockupStage>
        <S.PhonesStack>
          <S.PhoneFrame $tilt={-14} $offset={-28} $opacity={0.55} $scale={0.82}>
            <S.PhoneScreen>
              <img src={image} alt="" />
            </S.PhoneScreen>
          </S.PhoneFrame>
          <S.PhoneFrame $tilt={0} $z={3}>
            <S.PhoneScreen>
              <img src={image} alt={alt} />
            </S.PhoneScreen>
          </S.PhoneFrame>
          <S.PhoneFrame $tilt={14} $offset={28} $opacity={0.55} $scale={0.82}>
            <S.PhoneScreen>
              <img src={image} alt="" />
            </S.PhoneScreen>
          </S.PhoneFrame>
        </S.PhonesStack>
      </S.MockupStage>
    );
  }

  if (image) {
    return <LaptopMockup image={image} alt={alt} />;
  }

  return null;
}
