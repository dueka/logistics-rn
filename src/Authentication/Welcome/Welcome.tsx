import React from "react";
import { Image, Dimensions } from "react-native";
import { Routes } from "../../../Navigation";
import { Button } from "../../components";
import { StackNavigationProps } from "../../components/Navigation";
import theme, { Box, Text } from "../../components/Theme";

const { width } = Dimensions.get("window");
const picture = {
  src: require("../assets/1.jpg"),
  width: 3383,
  height: 5074,
};
export const assets = [picture.src];
const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="grey"
          borderTopLeftRadius="xl"
          flex={1}
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            variant="transparent"
            label="Forgot password?"
            onPress={() => true}
          />
          {/* <Button variant="default" label="Register as Login" /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
