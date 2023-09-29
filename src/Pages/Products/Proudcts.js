import React, { useEffect, useState } from "react";
import { StyledShopHeader, StyledShopHeaderContent } from "./Product.Styled";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import ProductCard from "../../components/proudctCard/ProductCard";
import { Container, FlexBox, FlexColum } from "../../App.Styled";
import axios from "axios";
import "./style.css";
function Proudcts() {
  const [products, setProducts] = useState([]);

  async function getProudcts() {
    try {
      var response = await axios.get(
        "https://e-commerce-api-fylh.onrender.com/api/products"
      );
      setProducts(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getProudcts();
  });
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Typography key="3" color="text.primary">
      Shop
    </Typography>,
  ];

  return (
    <FlexColum>
      <StyledShopHeader justify="center" items="center">
        <StyledShopHeaderContent justify="center" items="center">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
          <Typography variant="h3" p="10px 0px">
            Shop
          </Typography>
          <Typography
            variant="p"
            width="50%"
            p="10px 0px"
            color="#3E3E59"
            className="media-Pargrah"
          >
            At vero eos et accusamus et iusto odio dignisssimos ducimus qui
            blanditiis voluptatum deleniti.
          </Typography>
        </StyledShopHeaderContent>
      </StyledShopHeader>
      <Container>
        <Typography variant="p" m="50px 0" fontWeight="600" color="#605F5F">
          {products.length} Proudcts
        </Typography>
      </Container>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <FlexBox justify="center" height="40vh" items="center">
          <Typography
            variant="p"
            fontWeight="600"
            color="#605F5F"
            justifyContent="center"
          >
            No products to show
          </Typography>
        </FlexBox>
      )}
    </FlexColum>
  );
}

export default Proudcts;
