import React from "react";
import styled from "styled-components";
// import img from './Assets/images/group-icon.png'
// import img from './Assets/images/c.png'

const GlobalBut = ({ img, bg, cl, bc, bc1, cl1, bg1 }) => {
  return (
    <div>
      <Container bg={bg} cl={cl} bc={bc} bc1={bc1} cl1={cl1} bg1={bg1}>
        <Wrapper>
          <Img src={img} />
        </Wrapper>
      </Container>
    </div>
  );
};

export default GlobalBut;

const Img = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const Container = styled.div`
  background-color: ${({ bg }) => (bg ? "white" : "black")};
  color: ${({ cl }) => (cl ? "black" : "white")};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid;
  border-color: ${({ bc }) => (bc ? "gray" : "white")};
  transition: all 350ms;
  margin: 0 10px;

  :hover {
    cursor: pointer;
    border-color: ${({ bc1 }) => (bc1 ? "white" : "gray")};
    color: ${({ cl1 }) => (cl1 ? "white" : "black")};
    background-color: ${({ bg1 }) => (bg1 ? "black" : "lightgray")};
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
