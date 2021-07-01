import styled from 'styled-components'



export const Container = styled.div`


    position: absolute;
   background-color: #1F1F1F;
   background-size: cover;
   width: 100%;
   height: 100%;

    div#img{
        width: 280px;
    }
    
    div#div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div#hover{
        width: 280px;
        height: 240px;
        margin-top: 5px;
    display:flex;
    flex-direction: column;
    background-color: #DBDBDB;
       
    }
`;

export const Wrapper = styled.div`

    padding: 13px 0px 13px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div#dog{
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 470px;
    height: 550px;
    border-radius: 30px;
    background-color: #C4C4C4;
    }
`;