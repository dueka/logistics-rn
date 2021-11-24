import React from "react";
import { Box, Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import Map from "../../Map/MapScreen/Map";

const HomeScreen = ({ navigation }: HomeNavigationProps<"HomeScreen">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title={{
          titleText: "Search",
          onPress: () => true,
        }}
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "camera", onPress: () => true }}
      />
      <Box flex={1}>
        {/* <Background /> */}
        {/* <NavFavourites /> */}
        {/* <HomeNavigation /> */}
        <Map />
      </Box>
    </Box>
  );
};

export default HomeScreen;
