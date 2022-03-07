import React from "react";
import styled from "styled-components";
import logo from "./Assets/images/logo.svg";
import slog from "./Assets/images/soslogo.jpg";

const Footer = () => {
  return (
    <Container>
      <SubScribe>
        <span>SubScribe to our newsletter</span>
        <SubScribeInfo>
          <input placeholder="Email" />
          <button>Summit</button>
        </SubScribeInfo>
      </SubScribe>
      <Wrapper>
        <FooterHolder>
          <Footer1>
            <Title>Videos</Title>
            <Others>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
            </Others>
          </Footer1>
          <Footer1>
            <Title>Movies</Title>
            <Others>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
            </Others>
          </Footer1>
          <Footer1>
            <Title>Cinemas</Title>
            <Others>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
            </Others>
          </Footer1>
          <Footer1>
            <Title>Box office</Title>
            <Others>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
            </Others>
          </Footer1>
        </FooterHolder>
      </Wrapper>
      <WrapperBottom>
        <Logo src={logo} />
        <Right>Platform Developed by codelab Students</Right>
        <Social>
          <Icons></Icons>
        </Social>
      </WrapperBottom>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: #212433;
  color: whitesmoke;
  width: 100%;
  /* height: 50vh; */
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  font-family: poppins;
`;

const SubScribe = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 35px;
  }
`;

const SubScribeInfo = styled.div`
  width: 700px;
  background-color: whitesmoke;
  display: flex;
  height: 50px;
  border-radius: 30px;

  input {
    width: 100%;
    border: 2px;
    outline: none;
    border-radius: 30px;
    padding-left: 20px;
    font-size: 20px;
  }

  button {
    border: 2px;
    outline: none;
    background-color: white;
    border-radius: 30px;
    font-size: 20px;
    margin-right: 20px;
    font-family: poppins;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WrapperBottom = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-between;
`;

const FooterHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Footer1 = styled.div`
  width: 300px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Others = styled.div``;
const List = styled.div`
  padding-left: 20px;
  margin: 10px;
  font-size: 17px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
    color: lightblue;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: 100%;
  object-fit: contain;
`;
const Right = styled.div``;
const Social = styled.div`
  object-fit: contain;
`;
const Icons = styled.div``;
