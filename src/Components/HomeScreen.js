import React from "react";
import styled from "styled-components";
import MainView from "./MainView";
import Products from "./Products";
import SliderScreen from "./SliderScreen";

const HomeScreen = () => {
  return (
    <Container>
      <SliderScreen />
      <Products />
      <MainView />
    </Container>
  );
};

export default HomeScreen;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: url("./Assets/images/home-background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
`;
