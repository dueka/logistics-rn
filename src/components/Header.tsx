import React, { useState } from "react";
import { Alert, Dimensions, Modal, StyleSheet } from "react-native";
import { GOOGLE_MAPS_APIKEY } from "react-native-dotenv";
import { BorderlessButton } from "react-native-gesture-handler";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, RoundedIconButton, Text } from ".";
import { setDestination, setOrigin } from "../Redux/slices/navSlice";
import { useAppDispatch } from "../Redux/store";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: {
    titleText: string;
    onPress: () => void;
  };
  right: {
    icon?: string;
    onPress: () => void;
  };
  dark: boolean;
}

const Header = ({ title, left, right, dark }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const { width, height } = Dimensions.get("window");

  const insets = useSafeAreaInsets();
  const color = dark ? "white" : "primary";
  const backgroundColor = dark ? "primary" : "lightGrey";

  return (
    <Box
      flexDirection="row"
      style={{ marginTop: insets.top }}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="s"
    >
      <RoundedIconButton
        size={44}
        iconRatio={0.5}
        name={left.icon}
        onPress={left.onPress}
        {...{ color, backgroundColor }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <Box
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            // marginTop: 22,
          }}
        >
          <Box
            style={{
              margin: 20,
              borderRadius: 20,
              padding: 35,
              alignItems: "flex-end",
            }}
          >
            <Box
              style={{
                flex: 1,
                backgroundColor: "black",
                justifyContent: "flex-end",
                shadowOpacity: 0.25,
              }}
            >
              <Box backgroundColor="grey">
                <Box marginTop="m" margin="s">
                  <Text color="black" variant="title3">
                    Enter or Paste a Search Term
                  </Text>
                </Box>
                <Box marginTop="l" flex={1}>
                  <GooglePlacesAutocomplete
                    placeholder="Search"
                    styles={{
                      textInputContainer: {
                        backgroundColor: "grey",
                      },
                      textInput: {
                        height: 38,
                        color: "#5d5d5d",
                        fontSize: 16,
                      },
                      predefinedPlacesDescription: {
                        color: "#1faadb",
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
                <Box alignItems="center" padding="m">
                  <BorderlessButton
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text variant="header" color="black">
                      HIDE
                    </Text>
                  </BorderlessButton>
                </Box>
              </Box>

              <Box
                style={{
                  width: width - 30,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Modal>
      <BorderlessButton onPress={() => setModalVisible(true)}>
        <Text variant="header" {...{ color }}>
          {title && title.titleText && title.titleText.toUpperCase()}
        </Text>
      </BorderlessButton>
      <RoundedIconButton
        size={44}
        iconRatio={0.5}
        name={right.icon}
        onPress={right.onPress}
        {...{ color, backgroundColor }}
      />
    </Box>
  );
};

Header.defaultProps = { dark: false };

export default Header;

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
