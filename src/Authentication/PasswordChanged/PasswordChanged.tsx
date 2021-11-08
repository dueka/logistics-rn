import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Button, Container, Text } from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";
import CloseButton from "../components/CloseButton";
import { useTheme } from "@shopify/restyle";

const SIZE = 80;
const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
  const theme = useTheme();
  const color = theme.colors.secondary;
  return (
    <Container
      footer={
        <Box flexDirection="row" justifyContent="center">
          <CloseButton onPress={() => navigation.pop()} />
        </Box>
      }
    >
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box
          backgroundColor="secondary"
          justifyContent="center"
          alignItems="center"
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE }}
        >
          <Text color="primary">
            <Icon name="check" size={50} style={{ textAlign: "center" }} />
          </Text>
        </Box>

        <Box padding="s">
          <Text variant="title1" textAlign="center" marginBottom="l">
            Your password was successfully changed.
          </Text>
          {/* <Text variant="body" textAlign="center" marginBottom="l">
          Let's know relevant details about you.
        </Text> */}
          <Box>
            <Box alignItems="center" marginTop="m">
              <Button
                variant="primary"
                onPress={() => navigation.navigate("Login")}
                label="Login here"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
