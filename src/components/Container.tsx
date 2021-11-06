import React, { ReactNode } from "react";
import { Image, Dimensions, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, theme } from ".";

export const assets = [require("./assets/patterns/1.jpg")];
const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}
const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1} backgroundColor="primary">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.61}
        >
          <Image
            source={assets[0]}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
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
      <Box height={100} backgroundColor="primary">
        {footer}
        <Box height={insets.bottom} paddingTop="m" />
      </Box>
    </Box>
  );
};

export default Container;
