import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, Text } from "../../components";
import Checkbox from "../Form/Checkbox";
import TextInput from "../Form/TextInput";
import Footer from "../components/Footer";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Login = () => {
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
    onSubmit: (values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
    },
    validationSchema: LoginSchema,
  });
  const password = useRef<typeof TextInput>(null);
  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign up here"
      onPress={() => alert("Signup")}
    />
  );
  return (
    <Container {...{ footer }}>
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
            {/* <Button variant="transparent" onPress={() => true}> */}
            <Text color="secondary">Forgot Password</Text>
            {/* </Button> */}
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
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => handleSubmit}
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
            {/* <Button variant="transparent" onPress={() => true}>
              <Text color="secondary">Forgot Password</Text>
            </Button> */}
          </Box>
          <Box alignItems="center" marginTop="m">
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
