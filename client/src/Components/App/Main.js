import React from 'react';
import { Container, ImgWrapper, Title} from './MainStyle.js';
import Ramon from '../../assets/Dog.svg'


function Main(props) {
    return (
        <Container>
         <Title>
            <p id="p1">Join to learn more about your</p>
            <p id="p2">doggy friend.</p>
        </Title>
        <ImgWrapper>
            <img src= {Ramon} alt="Ramon"></img>
        </ImgWrapper>
        </Container>
    );
}

export default Main;