import React from "react";
import { styled } from "styled-components";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product design",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1366px;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;

const List = styled.ul``;

const Listitem = styled.li``;
const Right = styled.div`
  flex: 1;
`;
export const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            <Listitem></Listitem>
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};
