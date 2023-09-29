import React from "react";
import {
  StyledProudctCardContent,
  StyledProudctCardWrapper,
} from "./ProductCard.Styled";
import { Container, FlexBox, StyledImage } from "../../App.Styled";
import { Rating, Typography } from "@mui/material";
import { StyledDel } from "../../Pages/ProudctDetailes/components/ProductInfo.Styled";
import { StyledButton } from "../button/Button.Styled";
function ProductCard({ product }) {
  return (
    <Container>
      <StyledProudctCardWrapper>
        <StyledImage src={product.thumbnail} width="18%" />
        <StyledProudctCardContent>
          <Typography variant="p" fontWeight="600">
            {product.name}
          </Typography>
          <FlexBox items="center" p="15px 0px">
            <Typography variant="h6" fontSize="14px" fontWeight="900">
              ${product.price - product.price * (product.discount / 100)}
            </Typography>
            <StyledDel fontSize="14px">${product.price}</StyledDel>
          </FlexBox>
          <Rating name="read-only" value={product.rate} readOnly />
          <Typography variant="p" p="15px 0px" color="#3E3E59">
            {product.description}
          </Typography>
          <StyledButton backGround="#121212" width="60%" alignText="center">
            Add to Cart
          </StyledButton>
        </StyledProudctCardContent>
      </StyledProudctCardWrapper>
    </Container>
  );
}

export default ProductCard;
