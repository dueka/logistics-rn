import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Box, HomeOptions } from "../../components";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 1;
const height = width * (500 / 294);
const borderRadius = 24;

interface HomeNavigationProps {}

const HomeNavigation = () => {
  const backgroundColor = "secondary";

  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        style={{
          backgroundColor,
          width,
          height,
          borderRadius,
        }}
      >
        <Box style={tw`p-5`}>
          <HomeOptions />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeNavigation;
