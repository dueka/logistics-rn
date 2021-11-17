import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { GOOGLE_MAPS_APIKEY } from "react-native-dotenv";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Box, Text } from ".";
import { useAppDispatch } from "../Redux/store";
import { setDestination } from "../Redux/slices/navSlice";
import { StyleSheet } from "react-native";
import { HomeNavigationProps } from "./Navigation";

const NavigateCard = ({ navigation }: HomeNavigationProps<"NavigateCard">) => {
  const dispatch = useAppDispatch();
  return (
    <Box style={tw`border-t border-gray-200 flex-shrink`}>
      <Box>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          styles={toInputBoxStyles}
          fetchDetails={true}
          enablePoweredByContainer={false}
          debounce={400}
          minLength={2}
          nearbyPlacesAPI="GooglePlacesSearch"
          onPress={(data, details = null) => {
            console.log(data, details);
            dispatch(
              setDestination({
                location: details?.geometry.location,
                description: data.description,
              })
            );
            // navigation.navigate("RideOptionsCard");
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />
      </Box>
    </Box>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 0,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
