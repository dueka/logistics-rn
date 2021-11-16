import React from "react";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Box, Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import Background from "./Background";
import HomeNavigation from "./HomeNavigation";
// import { GOOGLE_MAPS_APIKEY } from "react-native-dotenv";

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
        <HomeNavigation />
      </Box>
    </Box>
  );
};

export default HomeScreen;
