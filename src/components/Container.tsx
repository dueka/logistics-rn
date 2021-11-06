import React from "react";
import { Image, Dimensions, StyleSheet, StatusBar } from "react-native";
import { Box, theme } from ".";

export const assets = [require("./assets/patterns/1.jpg")];
const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
interface ContainerProps {
  children: ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <Box flex={1} backgroundColor="primary">
      <StatusBar barStyle="light-content" />
      <Box borderBottomLeftRadius="xl" overflow="hidden" height={height * 0.61}>
        <Image
          source={assets[0]}
          style={{
            width,
            height,
            borderBottomLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <Box
          borderRadius="xl"
          borderTopLeftRadius={0}
          backgroundColor="white"
          flex={1}
        >
          {children}
        </Box>
      </Box>
      <Box height={200} backgroundColor="primary"></Box>
    </Box>
  );
};

export default Container;
