import React from "react";
import { Box, Text } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

const MapScreen = ({ navigation }: HomeNavigationProps<"MapScreen">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box flex={1}>
        <Text variant="hero" color="primary">
          show mewewwwwwwwwwwwww the oney
        </Text>
      </Box>
    </Box>
  );
};

export default MapScreen;
