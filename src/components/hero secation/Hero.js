import React from "react";
import { HeroContent, HeroDiv, StyledHero } from "./Hero.Styled";
import { Image, Typography } from "../../App.Styled";
import imagesd from "../../assits/heroImage.png";
import { StyledButton } from "../button/Button.Styled";
import "./style.css";
function Hero() {
  return (
    <StyledHero>
      <HeroDiv backGrond={"#F2B6BC"} desktopWidth="50%" mobileWidth="100%">
        <HeroContent>
          <h1 className="h1-Width">Care products for every home.</h1>
          <Typography width="60%">
            Keep your everyday style chic and on-trend with our selection 20+
            styles to choose from.
          </Typography>
          <StyledButton backGround={"#121212"} width="25%">
            See Collections
          </StyledButton>
        </HeroContent>
      </HeroDiv>
      <HeroDiv desktopWidth="50%" mobileWidth="100%">
        <Image src={imagesd} alt="145" height="100vh" />
      </HeroDiv>
    </StyledHero>
  );
}

export default Hero;
