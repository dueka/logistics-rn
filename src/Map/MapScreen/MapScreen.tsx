import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Box, NavigateCard } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import RideOptionsCard from "../../components/RideOptionsCard";
import Map from "./Map";

const MapScreen = ({ navigation }: HomeNavigationProps<"MapScreen">) => {
  const Stack = createStackNavigator();
  return (
    <Box flex={1} backgroundColor="white">
      <Box flex={1 / 2}>
        <Map />
      </Box>
      <Box flex={1}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </Box>
    </Box>
  );
};

export default MapScreen;
