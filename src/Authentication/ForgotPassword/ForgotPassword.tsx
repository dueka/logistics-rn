import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Linking } from "react-native";
import { Box, Button, Container, Text } from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";
import Footer from "../components/Footer";
import TextInput from "../Form/TextInput";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
});

const ForgotPassword = ({
  navigation,
}: StackNavigationProps<Routes, "ForgotPassword">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: { email: "" },
      onSubmit: () => navigation.navigate("PasswordChanged"),
      validationSchema: ForgotPasswordSchema,
    }
  );

  const footer = (
    <Footer
      title="Doesn't work?"
      action="Contact support"
      onPress={() => Linking.openURL("mailto:ekanemd@live.com")}
    />
  );
  return (
    <Container pattern={2} {...{ footer }}>
      <Box padding="xl" justifyContent="center" flex={1}>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Forgot Password?
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below to reset your password
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
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>

          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Reset Password"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
