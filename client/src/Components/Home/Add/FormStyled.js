import styled from 'styled-components'


export const Container = styled.div`
   position: absolute;
   background-color: #1F1F1F;
   background-size: cover;
   width: 100%;
   height: 100%;
`;

export const Wrapper = styled.div`
    padding: 13px 0px 13px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 470px;
    height: 550px;
    background-color: #C4C4C4;
    div#Submit{
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`;

export const FormS = styled.form`
    
    padding-left: 30px;
    div#Body{
        display: flex;
        flex-direction: column;
    }
   
`;

export const HeaderForm = styled.div`
    padding: 30px 30px 0px;
    display: grid;
    grid-template-columns: 80% 20%20px;
    div#h3{
        display: flex;
        flex-direction: column;
       
    }
    div#h5{
        margin-top:14px;
    }
    h3{
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
    }
    h5{
        font-family: Poppins;
        font-style: normal;
        font-weight: 200;
        font-size: 11px;
        line-height: 5px;
    }
    p{
        font-family: Poppins;
        font-style: italic;
        font-weight: 400;
        font-weight: normal;
        font-size: 9px;
        line-height: 20px;
    }
`;

export const Label = styled.label`
    font-size: 12px;
    padding-top: 8px;
`;

export const Input = styled.input`
    background-color: #EDEFF2;
    border-radius: 8px;
    border: none;
    width: 300px;
    height: 30px;
    ::-webkit-input-placeholder {
        padding: 5px;
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
    }
`;
export const Input2 = styled.input`
    background-color: #EDEFF2;
    border-radius: 8px;
    border: none;
    margin-right: 5px;
    width: 80px;
    height: 25px;
    ::-webkit-input-placeholder {
        padding: 5px;
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
    }
`;
export const Input3 = styled.input`
    background-color: #EDEFF2;
    border-radius: 8px;
    border: none;
    width: 220px;
    height: 30px;
    ::-webkit-input-placeholder {
        padding: 5px;
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
    }
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 270px 200px;
    div{
        div#Input{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }
`;

export const Area = styled.div`
    div#label{

    margin-top: 2px;
    width: 220px;
    height: 60px;
    background-color: gray;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 21px;
    span{
        text-align: center;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
    }
    
    }
`;
export const ImgWrapper = styled.div`
    margin-left: 5px;
    padding: 5px;
`;


export const GridWrapper = styled.div`
    margin-top: 20px;
    width: 150px;
    height: 100px;

   
    div#Box{

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-space-around;
    }
    select{
        border: none;
        background-color: #999999;
        color: black;
        font-size: 10px;
        width: 130px;
        height: 90px;
        margin: 2px;
        padding: 3px;

    }
`;


export const Submit = styled.input`

    width: 424px;
    height: 35px;
    background: #52B87A;
    border-radius: 10px;
    border: none;
    color: white;
`;



