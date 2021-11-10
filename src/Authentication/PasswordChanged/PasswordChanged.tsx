import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import {
  Box,
  Button,
  Container,
  RoundedIcon,
  RoundedIconButton,
  Text,
} from "../../components";
import { AuthNavigationProps } from "../../components/Navigation";

const SIZE = 80;
const PasswordChanged = ({
  navigation,
}: AuthNavigationProps<"PasswordChanged">) => {
  return (
    <Container
      pattern={2}
      footer={
        <Box flexDirection="row" justifyContent="center">
          <RoundedIconButton
            backgroundColor="white"
            color="primary"
            name="x"
            size={60}
            onPress={() => navigation.navigate("Login")}
            iconRatio={0.5}
          />
        </Box>
      }
    >
      <Box flex={1} justifyContent="center" alignItems="center" padding="xl">
        <RoundedIcon
          name="check"
          size={SIZE}
          backgroundColor="secondary"
          color="primary"
          iconRatio={0.5}
        />

        <Box padding="s">
          <Text variant="title1" textAlign="center" marginVertical="l">
            Your password was successfully changed.
          </Text>
          <Text variant="body" textAlign="center" marginBottom="l">
            Close this window and login again.
          </Text>
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
