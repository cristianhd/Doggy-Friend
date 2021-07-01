import styled from "styled-components";




export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
    background-color: black;
    display:flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height:100%;
    p{
        margin-top: 2rem;
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        color: #DBDBDB;
        line-height: 1rem;
    }
    `;

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    
    img{
        position: relative;
        padding: 0.3rem;
        height: 70%;
    }
    
    span{
        display: flex;
        align-items: center;
        margin-top: 0.5px;
        font-family: Poppins;
        font-weight: 800;
        font-size: 20px;
        color: #FFFFFF;
        line-height: 1.2rem;
        letter-spacing: 1.5px;
       
        
    }
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const Form = styled.form`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    #s1{
        padding-top: 0.5rem;
        color: #91D4A8;;
        opacity: 0.6;
        font-size: 12px;
    }
    #s2{
        color: #91D4A8;
        opacity: 0.3;
        font-size: 12px;
    }
    #Link{
        text-decoration: none;
        position: relative;
        margin-top: 0.7rem;
        width: 290px;
        height: 25px;
    }
  
    `;

export const Input = styled.input`
    position: relative;
    margin: 0.2rem;
    width: 290px;
    height: 35px;
    background: #EDEFF2;
    border-radius: 8px;
    border: none;
    ::-webkit-input-placeholder {
        text-align: center;
        color: rgba(0, 0, 0, 0.45);
        font-size: 11px;
    }
    `;

export const Submit = styled.button`
        position: relative;
    display: flex;
    flex-direction :row;
    align-items: center;
    justify-content: center;
    
    width: 290px;
    height: 25px;
    background: #52B87A;
    box-shadow: 2px 4px 8px rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    border: none;
    cursor: pointer;
    
    
    img{
        position: relative;
        width: 15px;
        height: 20px;
        padding: 0.3rem;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
    }
    span{
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 12px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
        color: #D9E8EF;
        
    }
    
    `;

export const Social = styled.div`
margin-top: 3rem;
img{
    position: relative;
    padding: 3rem;
}
`;

