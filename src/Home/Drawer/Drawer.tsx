import React from "react";
import { Image, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, RoundedIconButton, Text } from "../../components";
import { theme } from "../../components/Theme";
import DrawerItem, { DrawerItemProps } from "./DrawerItem";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Pending orders",
    screen: "Home",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "orange",
  },
  {
    icon: "settings",
    label: "Notification Settings",
    screen: "NotificationSettings",
    color: "pink",
  },
  {
    icon: "log-out",
    label: "Logout",
    screen: "Logout",
    color: "violet",
  },
];

const DrawerContent = () => {
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="primary"
          flexDirection="row"
          justifyContent="space-between"
          paddingHorizontal="m"
          style={{ paddingTop: insets.top }}
        >
          <RoundedIconButton
            size={24}
            name="x"
            color="white"
            backgroundColor="primary"
            onPress={() => true}
          />
          <Text color="white">Profile</Text>
          <RoundedIconButton
            size={24}
            color="white"
            backgroundColor="primary"
            onPress={() => true}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="primary" />
        <Box flex={1} backgroundColor="secondary" />
        <Image
          source={require("../../components/assets/patterns/1.jpg")}
          style={{
            position: "absolute",
            bottom: -height * 0.61,
            left: 0,
            right: 0,
            width: DRAWER_WIDTH,
            height: height,
          }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="l"
        >
          <Box
            top={-theme.spacing.xl}
            backgroundColor="secondary"
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
            alignSelf="center"
          />
          <Box marginVertical="m">
            <Text variant="title1" textAlign="center">
              David Ekanem
            </Text>
            <Text variant="body" textAlign="center">
              David Ekanem
            </Text>
          </Box>
          {items.map((item) => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </Box>
      </Box>
      <Box
        backgroundColor="white"
        width={DRAWER_WIDTH}
        overflow="hidden"
        height={height * 0.61}
      >
        <Image
          source={require("../../components/assets/patterns/1.jpg")}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: -height * (1 - 0.61),
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default DrawerContent;
