import React from "react";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Box, Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import Background from "./Background";
import HomeNavigation from "./HomeNavigation";

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
        <Box>
          <GooglePlacesAutocomplete
            placeholder="Search"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            styles={{
              textInput: {
                fontSize: 18,
              },
            }}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;
