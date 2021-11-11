import React from "react";
import { Box, Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

const HomeScreen = ({ navigation }: HomeNavigationProps<"HomeScreen">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Home"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "camera", onPress: () => true }}
      />
    </Box>
  );
};

export default HomeScreen;
