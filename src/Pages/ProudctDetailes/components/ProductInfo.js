import React, { useState, useRef, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container, FlexBox, FlexColum } from "../../../App.Styled";
import {
  MySpan,
  StyledCounter,
  StyledCounterClick,
  StyledDel,
  StyledExpiredWrapper,
  StyledImageWrapper,
  StyledPargraph,
  StyledProudctImage,
  StyledTime,
  StyledTimerWrapper,
} from "./ProductInfo.Styled";
import ImagePlaceholder from "../../../assits/ImagePlaceholder.png";
import "../style.css";
import Link from "@mui/material/Link";
import { Breadcrumbs, Rating, Typography } from "@mui/material";
import { StyledButton } from "../../../components/button/Button.Styled";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import SwiperCore, {
  FreeMode,
  Navigation,
  Thumbs,
  Controller,
} from "swiper/modules";

function ProductInfo({ price }) {
  const [counter, setCounter] = useState(1); // Initialize the counter state
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const swiper1Ref = useRef(null); // Ref for the first Swiper
  const swiper2Ref = useRef(null); // Ref for the second Swiper
  useLayoutEffect(() => {
    if (swiper1Ref.current !== null) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, []);
  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1); // Decrease the counter if it's greater than 1
    }
  };

  const handleIncrement = () => {
    setCounter(counter + 1); // Increase the counter
  };
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/cloth">
      Clothing
    </Link>,
    <Typography key="3" color="text.primary">
      ProudctName
    </Typography>,
  ];
  return (
    <Container>
      <FlexBox>
        <Swiper
          onSwiper={(swiper) => {
            if (swiper1Ref.current !== null) {
              swiper1Ref.current = swiper;
            }
          }}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          preloadImages={false}
          controller={{ control: secondSwiper }}
          spaceBetween={10}
          slidesPerView={1}
          grabCursor={true}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, Controller]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <StyledProudctImage src={ImagePlaceholder} />
          </SwiperSlide>
          <SwiperSlide>
            <StyledProudctImage src={ImagePlaceholder} />
          </SwiperSlide>
          <SwiperSlide>
            <StyledProudctImage src={ImagePlaceholder} />
          </SwiperSlide>
          <SwiperSlide>
            <StyledProudctImage src={ImagePlaceholder} />
          </SwiperSlide>
        </Swiper>

        <FlexColum margin="15px 0px 0px 60px" width="48%">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
          <Typography variant="h4">ProductName</Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt et dolore
          </Typography>
          <Rating name="read-only" value={4.5} readOnly />
          <FlexBox items="center">
            <Typography variant="h5">$86</Typography>
            <StyledDel>$104</StyledDel>
          </FlexBox>
          <StyledExpiredWrapper>
            <Typography variant="p">
              <MySpan>Hurry up</MySpan>, offer expired in:
            </Typography>
            <FlexBox>
              <StyledTimerWrapper items="center">
                <StyledTime>10</StyledTime>
                <StyledPargraph variant="p">Days</StyledPargraph>
              </StyledTimerWrapper>
              <StyledTimerWrapper items="center" ml="16px">
                <StyledTime ml="16px">10</StyledTime>
                <StyledPargraph variant="p">Hours</StyledPargraph>
              </StyledTimerWrapper>
              <StyledTimerWrapper items="center" ml="16px">
                <StyledTime ml="16px">10</StyledTime>
                <StyledPargraph variant="p">Minutes</StyledPargraph>
              </StyledTimerWrapper>
              <StyledTimerWrapper items="center" ml="16px">
                <StyledTime>10</StyledTime>
                <StyledPargraph variant="p">Seconds</StyledPargraph>
              </StyledTimerWrapper>
            </FlexBox>
          </StyledExpiredWrapper>
          {/* Add Cart */}
          <StyledCounter justify="space-between">
            <StyledCounterClick onClick={handleDecrement}>-</StyledCounterClick>
            <StyledCounterClick>{counter}</StyledCounterClick>
            <StyledCounterClick onClick={handleIncrement}>+</StyledCounterClick>
          </StyledCounter>
          <StyledButton backGround="#121212" alignText="center" width="80%">
            Add to Cart
          </StyledButton>
        </FlexColum>
      </FlexBox>
      <Swiper
        controller={{ control: firstSwiper }}
        loop={false}
        spaceBetween={10}
        slidesPerView={8}
        watchSlidesProgress
        touchRatio={0.2}
        preloadImages={false}
        lazy
        slideToClickedSlide={true}
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs, Controller]}
        className="mySwiper"
      >
        <SwiperSlide>
          <StyledProudctImage src={ImagePlaceholder} />
        </SwiperSlide>
        <SwiperSlide>
          <StyledProudctImage src={ImagePlaceholder} />
        </SwiperSlide>
        <SwiperSlide>
          <StyledProudctImage src={ImagePlaceholder} />
        </SwiperSlide>
        <SwiperSlide>
          <StyledProudctImage src={ImagePlaceholder} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default ProductInfo;
