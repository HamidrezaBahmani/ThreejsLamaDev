import { styled } from "styled-components";
import { Contact } from "./componenets/Contact";
import { Hero } from "./componenets/Hero";
import { Who } from "./componenets/Who";
import { Works } from "./componenets/Works";

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
`;
function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
