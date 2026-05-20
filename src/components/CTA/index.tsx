import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { Highlight } from "../../style/Shared";
import * as S from "./Styled";

export function CTA() {
  const [whatsappUrl, setWhatsappUrl] = useState("#");

  useEffect(() => {
    const phoneNumber = "5521975956657";
    const message =
      "Olá! Seja bem-vindo(a) ao WhatsApp de Bruna Santiago. Como posso te ajudar hoje?";
    const encodedMessage = encodeURIComponent(message);
    setWhatsappUrl(`https://wa.me/${phoneNumber}?text=${encodedMessage}`);
  }, []);

  return (
    <S.Container>
      <S.Inner>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <S.Box>
          <S.CtaContent>
            <S.CtaTitle>
              Tem um <Highlight>projeto</Highlight> em mente?
            </S.CtaTitle>
            <S.ContactButton
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiSend size={18} />
              Entrar em contato
            </S.ContactButton>
          </S.CtaContent>

          <S.QuoteBlock>
            <S.QuoteMark>&ldquo;</S.QuoteMark>
            <S.QuoteText>
              Acredito que tecnologia transforma ideias em{" "}
              <Highlight>impacto real.</Highlight>
            </S.QuoteText>
          </S.QuoteBlock>
        </S.Box>
      </motion.div>
      </S.Inner>
    </S.Container>
  );
}
