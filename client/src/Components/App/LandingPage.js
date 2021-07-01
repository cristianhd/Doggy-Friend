import { Container,Wrapper } from './LandingPageStyled.js'
import Main from './Main.js';
import Sidebar from './Sidebar.js';

function App() {
  return (
    <Container>   
      <Wrapper>
        <Sidebar/>
        <Main/>
      </Wrapper>
    </Container>
  );
}

export default App;
