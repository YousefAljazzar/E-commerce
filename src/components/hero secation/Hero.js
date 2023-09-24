import React from "react";
import { HeroContent, HeroDiv, StyledHero } from "./Hero.Styled";
import { Image, Typography } from "../../App.Styled";
import imagesd from "../../assits/heroImage.png";
import { StyledButton } from "../button/Button.Styled";
function Hero() {
  return (
    <StyledHero>
      <HeroDiv backGrond={"#F2B6BC"}>
        <HeroContent>
          <h1>Care products for every home.</h1>
          <Typography>
            Keep your everyday style chic and on-trend with our selection 20+
            styles to choose from.
          </Typography>
          <StyledButton backGround={"#121212"}>See Collections</StyledButton>
        </HeroContent>
      </HeroDiv>
      <HeroDiv>
        <Image src={imagesd} alt="145" />
      </HeroDiv>
    </StyledHero>
  );
}

export default Hero;
