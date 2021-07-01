import styled from 'styled-components';


export const Container = styled.div`
#p1{
    margin-top: 8rem;  
    font-family: Poppins;
    font-style: normal;
    font-weight: 800;
    font-size: 35px;
    line-height: 4px;
    letter-spacing: 0.07em;
    
}
#p2{
    font-family: Poppins;
    font-style: normal;
    font-weight: 800;
    font-size: 70px;
    color: #FCA121;
    letter-spacing: 0.05em;
}

`;
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`;


export const ImgWrapper = styled.div`
        position: absolute;
        display: grid;
        grid-template-columns: repeat(11, 1fr);

        
        
        
        img{
            grid-column: 6/13;
            width: 79.7%;
    
        
    }
    `;

