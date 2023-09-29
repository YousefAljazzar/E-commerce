import React from "react";
import { Container, Typography } from "../../../App.Styled";
import "../style.css";
import { FaRegEnvelope } from "react-icons/fa";
import { StyledEmailWrapper, StyledNewsletter } from "./Newsletter.Styled";

function Newsletter() {
  return (
    <div className="body-new">
      <Container>
        <StyledNewsletter items={"center"}>
          <Typography fontSize="24" fontWeight="900">
            Join Our Newsletter
          </Typography>
          <Typography fontSize="18">
            Big discounts and right to your inbox.
          </Typography>
          <StyledEmailWrapper items="center">
            <FaRegEnvelope className="icon" />
            <input
              type="email"
              className="input-email"
              placeholder="Email Address"
            />
            <p>Signup</p>
          </StyledEmailWrapper>
        </StyledNewsletter>
      </Container>
    </div>
  );
}

export default Newsletter;
