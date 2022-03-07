import React from "react";
import styled from "styled-components";
import slide1 from "./Assets/images/slider-badging.jpg";
import data from "./Data.json";
import { Link } from "react-router-dom";

const MainView = () => {
  return (
    <Container>
      <span>Movie Collection</span>
      <Wrapper>
        {data.map((props) => (
          <Main key={props.id} to={`/detail/${props.id1}`}>
            <div>{props.title}</div>
            <Image src={props.cardImg} />
          </Main>
        ))}
      </Wrapper>
    </Container>
  );
};

export default MainView;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  span {
    font-weight: bold;
    font-family: poppins;
    font-size: 30px;
    letter-spacing: 1px;
    padding-left: 50px;
    padding-top: 80px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;
`;

const Main = styled(Link)`
  width: 100%;
  height: 300px;
  border: 2px solid gray;
  border-radius: 5px;
  transition: all 350ms;
  transform: scale(1);
  transition: all 500ms;
  transform: scale(1);
  position: relative;

  div {
    position: absolute;
    bottom: 10px;
    left: 0px;
    font-size: 20px;
    font-weight: 500px;
    z-index: 10;
    color: white;
    opacity: 0;
    transition: all 550px;
    padding-left: 10px;
  }

  :hover {
    cursor: pointer;
    border: 2px solid white;
    transform: scale(1.01);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;

    div {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;

  /* :hover{
      background-color: rgba(0,0,0,0.5);
  } */
`;

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: all 350ms;
  border-radius: 5px;
  :hover {
    display: block;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1;
    border-radius: 5px;
  }
`;

const Title = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-size: 20px;
  font-weight: 500;
  opacity: 0;
  :hover {
    opacity: 1;
  }
`;
