import React from "react";
import { View } from "react-native";
import { Button, Container, Text } from "../../components";
import SocialLogin from "../components/SocialLogin";
const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Button variant="transparent">
        <Text variant="button">Don't have an account? </Text>
        <Text variant="button">Sign up here</Text>
      </Button>
    </>
  );
  return (
    <Container {...{ footer }}>
      <View />
    </Container>
  );
};

export default Login;
