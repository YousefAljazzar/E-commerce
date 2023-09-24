import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container, FlexBox, Typography } from "../../App.Styled";
import {
  StyledPaddingDiv,
  StyledProductImage,
  StyledProductWrapper,
} from "./Home.Styled";
import Image from "../../assits/Image.png";

function Latest() {
  return (
    <Container>
      <StyledPaddingDiv m="100px 0px">
        <Typography fontSize="27" fontWeight="700">
          Lastest Additions
        </Typography>
        <Swiper spaceBetween={50} slidesPerView={4}>
          <SwiperSlide>
            <StyledProductImage src={Image} width={"100%"} />
            <Typography fontSize="14 " fontWeight="700">
              Pink Huice
            </Typography>
            <FlexBox>
              <Typography fontSize="14" fontWeight="700">
                $50
              </Typography>
              <Typography fontSize="14" color="#A7A7A7" marginLeft="10px">
                <s>$24</s>
              </Typography>
            </FlexBox>
          </SwiperSlide>
          <SwiperSlide>
            <StyledProductImage src={Image} width={"100%"} />
            <Typography fontSize="14 " fontWeight="700">
              Pink Huice
            </Typography>
            <FlexBox>
              <Typography fontSize="14" fontWeight="700">
                $50
              </Typography>
              <Typography fontSize="14" color="#A7A7A7" marginLeft="10px">
                <s>$24</s>
              </Typography>
            </FlexBox>
          </SwiperSlide>
          <SwiperSlide>
            <StyledProductImage src={Image} width={"100%"} />
            <Typography fontSize="14 " fontWeight="700">
              Pink Huice
            </Typography>
            <FlexBox>
              <Typography fontSize="14" fontWeight="700">
                $50
              </Typography>
              <Typography fontSize="14" color="#A7A7A7" marginLeft="10px">
                <s>$24</s>
              </Typography>
            </FlexBox>
          </SwiperSlide>
          <SwiperSlide>
            <StyledProductImage src={Image} width={"100%"} />
            <Typography fontSize="14 " fontWeight="700">
              Pink Huice
            </Typography>
            <FlexBox>
              <Typography fontSize="14" fontWeight="700">
                $50
              </Typography>
              <Typography fontSize="14" color="#A7A7A7" marginLeft="10px">
                <s>$24</s>
              </Typography>
            </FlexBox>
          </SwiperSlide>
          <SwiperSlide>
            <StyledProductImage src={Image} width={"100%"} />
            <Typography fontSize="16 " fontWeight="700">
              Pink Huice
            </Typography>
            <FlexBox>
              <Typography fontSize="16" fontWeight="700">
                $50
              </Typography>
              <Typography fontSize="16" color="#A7A7A7" marginLeft="10px">
                <s>$24</s>
              </Typography>
            </FlexBox>
          </SwiperSlide>
          <SwiperSlide>
            <StyledProductImage src={Image} width={"100%"} />
            <Typography fontSize="16 " fontWeight="700">
              Pink Huice
            </Typography>
            <FlexBox>
              <Typography fontSize="16" fontWeight="700">
                $50
              </Typography>
              <Typography fontSize="16" color="#A7A7A7" marginLeft="10px">
                <s>$24</s>
              </Typography>
            </FlexBox>
          </SwiperSlide>
        </Swiper>
      </StyledPaddingDiv>
    </Container>
  );
}

export default Latest;
