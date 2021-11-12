import React from "react";
import { Box, Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import Background from "./Background";
import Card from "./Card";

const HomeScreen = ({ navigation }: HomeNavigationProps<"HomeScreen">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Home"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "camera", onPress: () => true }}
      />
      <Box flex={1}>
        <Background />
        <Card position={1} />
        <Card position={0.5} />
        <Card position={0} />
      </Box>
    </Box>
  );
};

export default HomeScreen;
