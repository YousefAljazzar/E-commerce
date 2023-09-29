import React from "react";
import { Container, FlexBox, Typography } from "../../../App.Styled";
import { StyledButton } from "../../../components/button/Button.Styled";
import { StyledProductImage } from "../Home.Styled";
import Image from "../../../assits/Pasteimage.png";
import { TrandingDiv, TrandingImageWrapper } from "./Tranding.Styled";
function Tranding() {
  return (
    <Container>
      <FlexBox justify="space-between">
        <TrandingDiv width="50%" justify="center">
          <Typography fontSize="14">TRENDING</Typography>
          <Typography fontSize="40" width="70%">
            Caring about you and your body.
          </Typography>
          <Typography fontSize="14" width="60%">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </Typography>
          <StyledButton backGround="#121212" width="25%">
            See Collections
          </StyledButton>
        </TrandingDiv>
        <TrandingImageWrapper width="50%">
          <StyledProductImage src={Image} width="70%" />
        </TrandingImageWrapper>
      </FlexBox>
    </Container>
  );
}

export default Tranding;
