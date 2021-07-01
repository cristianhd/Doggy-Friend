import styled from 'styled-components'

export const Container = styled.div`
position: relative;
   background-color: #F5D9A8;
   background-size: cover;
   width: 100%;
   height: 100%;
   div#n{
      position: sticky;
      top: 0;
      
      }
   }
`;
export const ImgWrapper = styled.div`
  
img{
   width: 100%;
   height: 680px;
}
`;


export const BodyContainer = styled.div`
   margin: 60px 0px 60px 0px;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   width: 1200px;
   div#page{
      margin-top:5px;
      padding: 10px;
   
   }
    div#a{
       position: sticky;
       top: 20px;
       margin-right: 10px;
       padding: 5px;
       height: 200px;
      
     
    }
    div#dogs{
       margin-left: 100px;
  padding:5px;
    
       display: flex;
       flex-direction: column;
       width: 900px;
    }
`;

export const DogsWrapper = styled.div`

   
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   
   div{
      
      
   }
   
`;