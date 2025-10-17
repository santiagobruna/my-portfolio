import { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiInstagram } from 'react-icons/fi';
import LogoImg from '/logo-bruna.png'; 
import * as S from './Styled';


export function Footer() {
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
        <S.FooterContainer id='contact'>
        <S.FooterContent>
            <S.LeftSide>
            <S.Logo src={LogoImg} alt="Logo Bruna Carla" />
            <S.TextBlock>
                <p>Desenvolvedora Front-end focada em interfaces modernas e responsivas.</p>
                <p>Vamos construir algo incrível juntos?</p>
            </S.TextBlock>
            </S.LeftSide>

            <S.RightSide>
            <S.ContactTitle>Contato:</S.ContactTitle>
            <S.ContactList>
                <S.ContactItem>
                <a href="mailto:santiagobruna147@gmail.com" aria-label="Enviar email">
                    <FiMail size={20} /> E-mail
                </a>
                </S.ContactItem>
                <S.ContactItem>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                    <FiPhone size={20} /> WhatsApp
                </a>
                </S.ContactItem>
                <S.ContactItem>
                <a href="https://www.linkedin.com/in/brunacribeiro/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FiLinkedin size={20} /> LinkedIn
                </a>
                </S.ContactItem>
                <S.ContactItem>
                <a href="https://instagram.com/bruna_dev77" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FiInstagram size={20} /> Instagram
                </a>
                </S.ContactItem>
            </S.ContactList>
            </S.RightSide>
        </S.FooterContent>

        <S.Divider />
        <S.FooterBottom>Desenvolvido por <a href="https://github.com/santiagobruna" target="_blank" rel="noopener noreferrer">Bruna Carla</a></S.FooterBottom>
        </S.FooterContainer>
    );
}
