import React from "react";
import styled from "styled-components";

const GlobalButton = ({ bg, bg1, clr, icon, title }) => {
  return (
    <Container bg={bg} bg1={bg1}>
      <Wrapper clr={clr}>
        <Icon src={icon} />
        <span> {title} </span>
      </Wrapper>
    </Container>
  );
};

export default GlobalButton;

const Container = styled.div`
  width: 200px;
  height: 60px;
  background-color: ${({ bg }) => (bg ? "white" : "rgba(0,0,0,0.6)")};
  border-color: ${({ bg1 }) => (bg1 ? "rgba(0,0,0,0.6)" : "white")};
  margin: 0 20px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
    background-color: ${({ bg2 }) => (bg2 ? "rgba(225,225,225,0.7)" : "rgba(225,225,225,0.2)")};
  }
`;
const Wrapper = styled.div`
  width: 200px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ clr }) => (clr ? "white" : "black")};

  span {
    font-size: 20px;
    text-transform: uppercase;
  }
`;

const Icon = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
  margin-right: 10px;
`;
