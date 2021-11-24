import React, { forwardRef, useState } from "react";
import { GOOGLE_MAPS_APIKEY } from "react-native-dotenv";
import { Dimensions, Modal } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Box, Text } from ".";
import { setDestination, setOrigin } from "../Redux/slices/navSlice";
import { useAppDispatch } from "../Redux/store";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface SearchProps {}

const SearchComponent = forwardRef((ref, props) => {
  const [show, setShow] = useState(false);
  const { width, height } = Dimensions.get("window");

  const { onTouchOutside } = props;
  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const renderOutsideTouchable = (onTouch) => {
    const box = (
      <Box style={{ flex: 1, width: "100%" }}>
        {" "}
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
    if (!onTouch) return box;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{ flex: 1, width: "100%" }}
      >
        {box}
      </TouchableWithoutFeedback>
    );
  };
  const dispatch = useAppDispatch();
  return (
    <Box flex={1} padding="xl">
      <Modal
        ref={ref}
        animationType={"fade"}
        transparent={true}
        visible={show}
        onRequestClose={closeModal}
      >
        <Box
          style={{
            flex: 1,
            backgroundColor: "secondary",
            justifyContent: "flex-end",
          }}
        >
          {renderOutsideTouchable(onTouchOutside)}
          <Box
            style={{
              backgroundColor: "#FFFFFF",
              width: width,
              borderTopLeftRadius: "m",
              borderTopRightRadius: "m",
              paddingHorizontal: "m",
              maxHeight: height * 0.4,
            }}
          >
            <Box>
              <Text
                style={{
                  color: "#182e440",
                  fontSize: 20,
                  fontWeight: "500",
                  margin: "15",
                }}
              >
                Search
              </Text>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
});

export default SearchComponent;
