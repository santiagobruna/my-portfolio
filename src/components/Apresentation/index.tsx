import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import profileImg from "../../assets/foto2.jpeg"; 
import * as S from './Styled';

const HeroSection = () => {

    const [whatsappUrl, setWhatsappUrl] = useState("#");
    
    useEffect(() => {
            const phoneNumber = "5521975956657";
            const message =
            "Olá! Seja bem-vindo(a) ao WhatsApp de Bruna Santiago. Como posso te ajudar hoje?";
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            setWhatsappUrl(url);
    }, []);
    return (
        <S.Container>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <S.Info>
                <h1>Bruna Santiago</h1>
                <p>Desenvolvedora Front-end</p>

                <S.SocialIcons>
                    <S.IconButton
                    href="https://github.com/santiagobruna"
                    target="_blank"
                    aria-label="GitHub"
                    rel="noopener noreferrer"
                    >
                    <FaGithub />
                    </S.IconButton>

                    <S.IconButton
                    href="https://www.linkedin.com/in/brunacribeiro/"
                    target="_blank"
                    aria-label="LinkedIn"
                    rel="noopener noreferrer"
                    
                    >
                    <FaLinkedin />
                    </S.IconButton>

                    <S.IconButton
                    href={whatsappUrl}
                    target="_blank"
                    aria-label="WhatsApp"
                    rel="noopener noreferrer"
                    id="whatsapp-link"
                    >
                    <FaWhatsapp />
                    </S.IconButton>

                    <S.IconButton
                    href="https://instagram.com/bruna_dev77"
                    target="_blank"
                    aria-label="Instagram"
                    rel="noopener noreferrer"
                    >
                    <FaInstagram />
                    </S.IconButton>
                </S.SocialIcons>
                </S.Info>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <S.ProfileImage src={profileImg} alt="Foto de Bruna Santiago" />
            </motion.div>
        </S.Container>
    );
};

export default HeroSection;
