import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Theme } from "./Theme";
import { Box, Text } from ".";
import RoundedIcon, { RoundedIconProps } from "./RoundedIcon";
import { RectButton } from "react-native-gesture-handler";

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  return (
    <RectButton {...{ onPress }}>
      <RoundedIcon {...props} />
    </RectButton>
  );
};

export default RoundedIconButton;
