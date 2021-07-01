import styled from 'styled-components';



export const Container = styled.div`
    background-color: #04101C;
    background-size: cover;
    
  
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
#link{
text-decoration: none;

}
   
`;

export const LogoWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding: 0.3rem;
    }
    img{
        position: relative;
        padding: 0.5rem;
        height: 70%;
    }
    
    span{
        
        font-family: Poppins;
        font-style: normal;
        font-weight: 800;

        font-size: 20px;
        color: #FFFFFF;
        line-height: 1.2rem;
        letter-spacing: 1.5px;
       
        
    }
`;

export const ButtonWrapper = styled.div`
    padding-right: 1rem;

button{
        width: 145px;
        height: 35px;
        background: #52B87A;
        border-radius: 16px;    
        border: none;
        color: white;
        cursor: pointer;

    }
`;

