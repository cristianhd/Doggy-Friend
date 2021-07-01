import styled from 'styled-components'

export const Container = styled.div`

#label{
        margin-top: 1px;
        position: relative;
        padding: 5px;
       display: flex;
       flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        width: 150px;
        height: 60px;
        background-color:#DBDBDB;
        border: 1px solid #BFBFBF;
        box-sizing: border-box;
        border-radius: 4px;
        color: #BFBFBF;
    }

    span{
        
        font-size: 14px;
        text-decoration: underline;
        cursor: pointer;
        :hover{
            color:#04101C;
        }
     }

`;