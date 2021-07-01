import styled from "styled-components"

export const Container = styled.div`
    padding: 2px;
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    
    button{
        background: #FFFFFF;
        width: 32px;
        height: 32px;
        border: 1px solid #BFBFBF;
        box-sizing: border-box;
        box-shadow: inset -1px 0px 0px #FFFFFF;
        border-radius: 0px 4px 4px 0px;
    }
    select{
        background: #FFFFFF;
        width: 118px;
        height: 32px;
        border: 1px solid #BFBFBF;
        box-sizing: border-box;
        box-shadow: inset -1px 0px 0px #FFFFFF;
        border-radius: 4px 0px 0px 4px;
    }
`;