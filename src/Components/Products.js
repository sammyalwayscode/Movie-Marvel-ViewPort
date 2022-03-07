import React from "react";
import styled from "styled-components";
import vide from "./Assets/videos/marvel.mp4";
import vide2 from "./Assets/videos/disney.mp4";
import vide3 from "./Assets/videos/national-geographic.mp4";
import vide4 from "./Assets/videos/pixar.mp4";
import vide5 from "./Assets/videos/star-wars.mp4";

const Products = () => {
  return (
    <Container>
      <Wrapper>
        <img src={"./Assets/images/viewers-marvel.png"} alt="" />
        <video src={vide} type="video/mp4" autoPlay loop muted playsInline />
      </Wrapper>
      <Wrapper>
        <img src={"./Assets/images/viewers-disney.png"} alt="" />
        <video src={vide2} type="video/mp4" autoPlay loop muted playsInline />
      </Wrapper>
      <Wrapper>
        <img src={"./Assets/images/viewers-national.png"} alt="" />
        <video src={vide3} type="video/mp4" autoPlay loop muted playsInline />
      </Wrapper>
      <Wrapper>
        <img src={"./Assets/images/viewers-pixar.png"} alt="" />
        <video src={vide4} type="video/mp4" autoPlay loop muted playsInline />
      </Wrapper>
      <Wrapper>
        <img src={"./Assets/images/viewers-starwars.png"} alt="" />
        <video src={vide5} type="video/mp4" autoPlay loop muted playsInline />
      </Wrapper>
    </Container>
  );
};

export default Products;

const Container = styled.div`
  /* margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 10px;
  padding: 20px; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
const Wrapper = styled.div`
  /* width: 100%; */
  width: 250px;
  height: 200px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 2px solid gray;
  color: black;
  transition: all 350ms;
  transform: scale(1);

  img {
    /* height: 100%;
    width: 100%; */
    height: 200px;
    width: 230px;
    object-fit: contain;
    z-index: 100;
    border-radius: 5px;
  }

  video {
    position: absolute;
    left: 0;
    z-index: -100;
    /* width: 100%;
    height: 100%; */
    height: 200px;
    width: 250px;
    object-fit: cover;
    opacity: 0;
    transition: all 350ms;
    border-radius: 5px;
  }

  :hover {
    transform: scale(1.03);
    border: 4px solid white;
    cursor: pointer;
    background-color: green;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;

    video {
      opacity: 1;
    }
  }
`;
