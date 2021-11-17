import React from "react";
import tw from "tailwind-react-native-classnames";
import { Box, Map, Text } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

const MapScreen = ({ navigation }: HomeNavigationProps<"MapScreen">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box flex={1}>
        <Map />
      </Box>
      <Box flex={1}></Box>
    </Box>
  );
};

export default MapScreen;
