import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BorderlessButton } from "react-native-gesture-handler";
import { CompositeNavigationProp } from "@react-navigation/core";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { StackNavigationProp } from "@react-navigation/stack";
import { Box, Button, Container, Text } from "../../components";
import Checkbox from "../Form/Checkbox";
import TextInput from "../Form/TextInput";
import Footer from "../components/Footer";
import { AuthenticationRoutes, HomeRoutes } from "../../components/Navigation";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

interface LoginProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, "Login">,
    DrawerNavigationProp<HomeRoutes, "HomeScreen">
  >;
}
const Login = ({ navigation }: LoginProps) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: { email: "", password: "", remember: false },
    onSubmit: () => navigation.navigate("Home"),
    validationSchema: LoginSchema,
  });
  const password = useRef<typeof TextInput>(null);
  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign up here"
      onPress={() => navigation.navigate("SignUp")}
    />
  );
  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Box>
          <Box marginBottom="s">
            <TextInput
              icon="mail"
              placeholder="Enter your Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>
          <Box alignItems="flex-end">
            <BorderlessButton
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text variant="button" color="secondary">
                Forgot password?
              </Text>
            </BorderlessButton>
          </Box>
          <TextInput
            ref={password}
            icon="lock"
            placeholder="Enter your Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
            secureTextEntry
            autoCompleteType="password"
            autoCapitalize="none"
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
          />
          <Box
            flexDirection="row"
            justifyContent="space-between"
            paddingTop="s"
          >
            <Checkbox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue("remember", !values.remember)}
            />
          </Box>
          <Box alignItems="center" marginVertical="m">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Log into your account"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
