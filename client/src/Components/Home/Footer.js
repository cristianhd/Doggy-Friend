import React from 'react';
import { Container } from './FooterStyled';
import imgFooter from '../../assets/Footer.svg'


function Footer(props) {
    return (
        <Container>
            <img src={imgFooter} alt="footer"/>
        </Container>
    );
}

export default Footer;