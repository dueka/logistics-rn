import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, RoundedIconButton, Text } from ".";

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
      <BorderlessButton onPress={title.onPress}>
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
