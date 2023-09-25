import React from "react";
import { FlexColum, Typography } from "../../App.Styled";
import { StyledImage, StyledImageWrapper } from "./Instgram.Styled";
import Image from "../../assits/asd.png";
import Image2 from "../../assits/asd2.png";
import Image3 from "../../assits/asd3.png";

function Instgram() {
  return (
    <FlexColum items="center">
      <Typography fontWeight="900" fontSize="18">
        #nayzakdesign
      </Typography>
      <Typography fontWeight="900" fontSize="24">
        On Instagram
      </Typography>
      <StyledImageWrapper>
        <StyledImage src={Image} />
        <StyledImage src={Image2} />
        <StyledImage src={Image3} />
        <StyledImage src={Image} />
        <StyledImage src={Image2} />
        <StyledImage src={Image3} />
      </StyledImageWrapper>
    </FlexColum>
  );
}

export default Instgram;
