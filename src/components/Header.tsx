import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, RoundedIconButton, Text } from ".";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right: {
    icon?: string;
    onPress: () => void;
  };
}

const Header = ({ title, left, right }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      flexDirection="row"
      style={{ marginTop: insets.top }}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="s"
    >
      <RoundedIconButton
        size={24}
        name={left.icon}
        onPress={left.onPress}
        color="white"
        backgroundColor="primary"
      />
      <Text variant="header" color="white">
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        size={24}
        color="white"
        backgroundColor="primary"
        name={right.icon}
        onPress={right.onPress}
      />
    </Box>
  );
};

export default Header;
