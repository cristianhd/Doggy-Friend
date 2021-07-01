import background from "../../assets/Background.svg"

import styled from 'styled-components';


export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0 ;
    right : 0;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    
    `;

export const Wrapper = styled.div`
    width : 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 33% 66%;
`;

