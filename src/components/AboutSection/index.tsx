import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import * as S from './Styled';
import profileImg from "../../assets/foto2.jpeg"; 

const AboutSection: React.FC = () => {
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
        <S.Container id="about">
        <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <S.Image src={profileImg} alt="Foto de Bruna Santiago" />
        </motion.div>

        <S.Info>
            <h1>Bruna Carla Ribeiro Santiago de Oliveira</h1>
            <h3>Desenvolvedora Front-End</h3>
            <p>
            Sou apaixonada por criar experiências digitais únicas e funcionais.
            Tenho habilidades sólidas em HTML, CSS, JavaScript e frameworks modernos como React.
            Gosto de transformar ideias em interfaces atraentes, sempre com foco na
            experiência do usuário.
            </p>
            <p>
            Atualmente, estou em formação Full Stack e busco constantemente aprimorar minhas
            habilidades, explorando novas tecnologias e boas práticas para entregar soluções
            modernas e eficientes.
            </p>
            <S.Button href={whatsappUrl} 
            target="_blank"
            aria-label="WhatsApp"
            rel="noopener noreferrer"
            id="whatsapp-link"
            >ENTRAR EM CONTATO</S.Button>
            <S.Button href="/cv-geral.docx.pdf" 
            target="_blank"
            download
            rel="noopener noreferrer"
            >Baixar Currículo</S.Button>
        </S.Info>
        </S.Container>
    );
};

export default AboutSection;
