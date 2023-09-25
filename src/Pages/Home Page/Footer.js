import React from "react";
import { Container, Typography } from "../../App.Styled";
import {
  StyledAboutUs,
  StyledCurrncy,
  StyledFooter,
  StyledIconsWrapper,
  StyledLanguge,
  StyledListItem,
  StyledShoper,
  StyledUnOrderList,
} from "./Footer.Styled";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegFlag } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

import "./style.css";
function Footer() {
  return (
    <Container>
      <StyledFooter justify="space-between">
        <StyledAboutUs>
          <Typography fontSize="35">About Us</Typography>
          <Typography width="40%">
            Experience the future of e-commerce design with SHOPR. Limitless
            design possibilities.
          </Typography>
          <StyledIconsWrapper>
            <FaFacebook fontSize="1.5em" />
            <FaInstagram fontSize="1.5em" className="margin-Icons" />
            <FaTwitter fontSize="1.5em" className="margin-Icons" />
            <FaRegEnvelope fontSize="1.5em" className="margin-Icons" />
          </StyledIconsWrapper>
        </StyledAboutUs>
        <StyledUnOrderList>
          <StyledListItem fontSize="14px" fontWeight="600">
            Information
          </StyledListItem>
          <StyledListItem mt="15px">Shipping Policy</StyledListItem>
          <StyledListItem mt="15px">Returns & Refunds</StyledListItem>
          <StyledListItem mt="15px">Contact Us</StyledListItem>
          <StyledListItem mt="15px">Frequently asked</StyledListItem>
        </StyledUnOrderList>
        <StyledUnOrderList>
          <StyledListItem fontSize="14px" fontWeight="600">
            Company
          </StyledListItem>
          <StyledListItem mt="15px">About Us</StyledListItem>
          <StyledListItem mt="15px">Privacy Policy</StyledListItem>
          <StyledListItem mt="15px">Terms & Conditions</StyledListItem>
          <StyledListItem mt="15px">Cookie Policy</StyledListItem>
        </StyledUnOrderList>
      </StyledFooter>
      <StyledShoper>
        <Typography width="80%">© 2023 SHOPR</Typography>
        <StyledLanguge>
          <FaRegFlag />
          <Typography fontWeight="600">English</Typography>
          <MdKeyboardArrowDown fontSize="20px" fontWeight="600" />
        </StyledLanguge>
        <StyledCurrncy>
          <Typography fontWeight="600">USD</Typography>
          <MdKeyboardArrowDown fontSize="20px" />
        </StyledCurrncy>
      </StyledShoper>
    </Container>
  );
}

export default Footer;
