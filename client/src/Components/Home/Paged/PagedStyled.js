import styled from 'styled-components'

export const Container = styled.div`

display: flex;
    flex-direction: row;
    
    justify-content: space-around;
    width: 860px;

    label{
       display: inherit;
       margin: 0px 5px;
    }
    div#label{
    display: flex;
    flex-direction: row;
    color:gray;
    }
    label:hover{
            text-decoration:underline;
            cursor: pointer;
        }
        span#span:hover{
            color:gray;
            cursor: pointer;
        }
`;