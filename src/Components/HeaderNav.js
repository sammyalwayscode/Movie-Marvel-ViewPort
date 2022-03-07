import React from "react";
import styled from "styled-components";
import img from "./Assets/images/home-icon.svg";
import img2 from "./Assets/images/movie-icon.svg";
import img3 from "./Assets/images/series-icon.svg";
import img4 from "./Assets/images/watchlist-icon.svg";
import img5 from "./Assets/images/search-icon.svg";
import img6 from "./Assets/images/original-icon.svg";
import ImgLogo from "./Assets/images/logo.svg";
import ImgCircle from "./Assets/images/pepe.jpg";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <Container>
      <Logo src={ImgLogo} />
      <Wrapper>
        <Link to="/">
          <a>
            <img src={img} alt="" />
            <span>Home</span>
          </a>
        </Link>
        <a>
          <img src={img2} alt="" />
          <span>movie</span>
        </a>
        <a>
          <img src={img3} alt="" />
          <span>series</span>
        </a>
        <a>
          <img src={img6} alt="" />
          <span>favourite</span>
        </a>
        <a>
          <img src={img4} alt="" />
          <span>watchlist</span>
        </a>
        <a>
          <img src={img5} alt="" />
          <span>search</span>
        </a>
      </Wrapper>
      <Avatar>
        <AvatarPix src={ImgCircle} />
        <span>Samuel</span>
      </Avatar>
    </Container>
  );
};

export default HeaderNav;

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: rgb(17, 17, 17);
  display: flex;
`;

const Logo = styled.img`
  width: 80px;
  object-fit: contain;
  margin-left: 20px;
`;

const Avatar = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
  margin-top: 2px;
  span {
    opacity: 0;
    transition: all 350ms;
    text-transform: uppercase;
    font-weight: bold;
  }

  :hover {
    cursor: pointer;
    span {
      opacity: 1;
    }
  }
`;
const AvatarPix = styled.img`
  width: 40px;
  height: 40px;
  background-color: whitesmoke;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid whitesmoke;
`;

const Wrapper = styled.div`
  padding-left: 20px;
  width: 96%;
  height: 100%;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    margin-left: 20px;

    img {
      width: 30px;
      /* height: 25px; */
      margin-right: 10px;
    }

    span {
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 600;
      position: relative;
      opacity: 0.7;

      :after {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: white;
        left: 0;
        bottom: -2px;
        transform: scale(1);
        transform-origin: center left;
        transition: all 350ms;
        opacity: 0;
      }
    }

    :hover {
      cursor: pointer;

      span {
        :after {
          opacity: 1;
          transform: scale(1.05);
        }
      }
    }
  }
`;
