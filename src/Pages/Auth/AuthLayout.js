import React from "react";
import { StyleAuthImage, StyledAuthLayout } from "./Auth.Styled";
import img from "../../assits/signin.png";
function AuthLayout({ children }) {
  return (
    <StyledAuthLayout>
      <StyleAuthImage src={img} alt={"sign in"} />
      {children}
    </StyledAuthLayout>
  );
}

export default AuthLayout;
