import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Text } from "../../components";

interface CloseButtonProps {
  onPress: () => void;
}
const SIZE = 60;
const CloseButton = ({ onPress }: CloseButtonProps) => {
  return (
    <RectButton {...{ onPress }}>
      <Box
        style={{
          height: SIZE,
          width: SIZE,
          borderRadius: SIZE / 2,
        }}
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="primary">
          <Icon name="x" size={50} style={{ textAlign: "center" }} />
        </Text>
      </Box>
    </RectButton>
  );
};

export default CloseButton;
