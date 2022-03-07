import React from "react";
import styled from "styled-components";
import GlobalButton from "./GlobalButton";
import icon from "./Assets/images/play-icon-black.png";
import icon2 from "./Assets/images/play-icon-white.png";
import GlobalBut from "./GlobalBut";
import { useParams } from "react-router-dom";
import data from "./Data.json";
const Img =
  "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg";

const ImgCard =
  "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2041CE26663867FC4EF20377B8625BD629E619452E23BCDB1AB259DD475C2EA1/scale?width=1440&aspectRatio=1.78";

const Detail = () => {
  const { id } = useParams();

  console.log(id);
  console.log("My ID", data[id]);
  const myValue = data[id - 1];
  return (
    <Container>
      <OverLay />
      <BackGround src={myValue.backgroundImg} />
      <Wrapper>
        <ImageCard src={myValue.titleImg} />
        <Buttons>
          <GlobalButton bg bg1 icon={icon} title="Play" />
          <GlobalButton clr icon={icon2} title="Triller" />
          {/* <Groups>Hello</Groups> */}
          <GlobalBut />
        </Buttons>
        <Rating>{myValue.subTitle}</Rating>
        <Desc>{myValue.description}</Desc>
      </Wrapper>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
`;

const OverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

const BackGround = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ImageCard = styled.img`
  width: 400px;
  height: 300px;
  /* margin: ; */
`;

const Buttons = styled.div`
  display: flex;
  /* margin-left: 70px; */
`;

// const Groups = styled.div`
// height: 60px;
// width: 60px;
// border-radius: 50%;
// `

const Rating = styled.div`
  /* margin: 30px 70px; */
  font-family: poppins;
  color: lightgray;
`;

const Desc = styled.div`
  /* margin: 30px 70px; */
  min-width: 400px;
  max-width: 900px;
  font-family: poppins;
`;
