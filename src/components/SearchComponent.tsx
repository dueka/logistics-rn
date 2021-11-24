import React from "react";
import { GOOGLE_MAPS_APIKEY } from "react-native-dotenv";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Box } from ".";
import { setDestination, setOrigin } from "../Redux/slices/navSlice";
import { useAppDispatch } from "../Redux/store";
import { HomeNavigationProps } from "./Navigation";

const SearchComponent = ({
  navigation,
}: HomeNavigationProps<"SearchScreen">) => {
  const dispatch = useAppDispatch();
  return (
    <Box flex={1} padding="xl">
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
    </Box>
  );
};

export default SearchComponent;
