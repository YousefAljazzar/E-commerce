import { Button, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  StyledError,
  StyledInput,
  StyledSignInWrapper,
  StyledWrapper,
} from "./Auth.Styled";
import { FlexColum } from "../../App.Styled";
import { Form, Formik } from "formik";
import AuthLayout from "./AuthLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (values) => {
    setError("");
    try {
      const response = await axios.post(
        "https://e-commerce-api-fylh.onrender.com/api/login",
        values
      );
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/");
    } catch (e) {
      console.log(e.response.data.error);
      setError(e.response.data.error);
    }
  };
  return (
    <AuthLayout>
      <StyledSignInWrapper>
        <StyledWrapper>
          <Typography variant={"h5"} fontSize={"40px"} fontWeight={600}>
            Sign In
          </Typography>
          <Typography margin={"20px 0"} variant={"body2"}>
            Don’t have an accout yet?{" "}
            <Link fontWeight={600} href={"/register"}>
              sign up
            </Link>
          </Typography>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleLogin}
            // validationSchema={SigninSchema}
          >
            {({
              errors,
              handleSubmit,
              isSubmitting,
              setSubmitting,
              touched,
            }) => (
              <Form>
                <FlexColum margin={"20px 0"}>
                  <StyledInput
                    placeholder={"Your username or email"}
                    name={"email"}
                  />
                  <StyledError name={"email"} component={"small"} />
                </FlexColum>
                <FlexColum margin={"0 0 20px 0"}>
                  <StyledInput placeholder={"Password"} name={"password"} />
                  <StyledError name={"password"} component={"small"} />
                </FlexColum>
                <Button type={"submit"} variant="contained" fullWidth={true}>
                  Sign in
                </Button>
              </Form>
            )}
          </Formik>
        </StyledWrapper>
      </StyledSignInWrapper>
    </AuthLayout>
  );
}

export default Login;
