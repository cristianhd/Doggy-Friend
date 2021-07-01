import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px;
    position: relative;
    border: none;
    border-radius: 30px;
    width: 240px;
    
    div#img{
        width :100%;
        height:160px;
        
        background: white;
        border-radius: 30px 30px 0px 0px;
    }
    
  
    img{
        border-radius: 30px 30px 0px 0px;
        width :100%;
        height:160px;
     
    }
   
    div#hover:hover{
        background-color: #04101C;;
        color: white;
        opacity: 1;
        h4{
            color: #F5D9A8;
        }
        h5{
            color:#BFBFBF;
        }
    }
    
`;

export const Wrapper = styled.div`
    height: 170px;
    display:flex;
    flex-direction: column;
    background-color: #DBDBDB;
    opacity: 0.6;
    border: none;
    border-radius: 0px 0px 30px 30px;
    justify-content:flex-start;
   
    input{
        padding: 70px 20px 0px 0px;
        margin: 0px 0px 30px 10px;
        height: 30px;
        height: 30px;
       
    }
    h3{
        padding-top:15px;
        text-align: center;
        font-family: Poppins;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 16px;
    }
    h4{
        font-family: Poppins;
        font-style: italic;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
   
    }
    h5{
        padding : 2px;
        font-family: Poppins;   
        font-style: italic;
        font-weight: 300;
        font-size: 11px;
        line-height: 16px;
       
    }
    
    div{
   
     padding: 5px;
     display: flex;
     flex-direction: row;
     align-items: center;
     

        
        
        div#description {
            padding: 5px 10px;
            height: 120px;          
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            text-align: left;
        }
      
     
        
    }
`;