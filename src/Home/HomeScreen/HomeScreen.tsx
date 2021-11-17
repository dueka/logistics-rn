import React from "react";
import { GOOGLE_MAPS_APIKEY } from "react-native-dotenv";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Box, Header } from "../../components";
import NavFavourites from "../../components/NavFavourites";
import { HomeNavigationProps } from "../../components/Navigation";
import { setDestination, setOrigin } from "../../Redux/slices/navSlice";
import { useAppDispatch } from "../../Redux/store";
import Background from "./Background";
import HomeNavigation from "./HomeNavigation";

const HomeScreen = ({ navigation }: HomeNavigationProps<"HomeScreen">) => {
  const dispatch = useAppDispatch();
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Home"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "camera", onPress: () => true }}
      />

      <Box flex={1}>
        <Background />
        <Box flex={1}>
          <HomeNavigation />
          <GooglePlacesAutocomplete
            placeholder="Search"
            styles={{
              textInput: {
                fontSize: 18,
              },
            }}
            minLength={2}
            enablePoweredByContainer={false}
            onPress={(data, details = null) => {
              dispatch(
                setOrigin({
                  location: details?.geometry.location,
                  description: data.description,
                })
              );
              dispatch(setDestination(null));
            }}
            fetchDetails={true}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
          <NavFavourites />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;
