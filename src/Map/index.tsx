import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MapScreen } from "./MapScreen";
import { HomeRoutes } from "../components/Navigation";

const MapStack = createStackNavigator<HomeRoutes>();
export const MapNavigator = () => {
  return (
    <MapStack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerShown: false,
      }}
    >
      <MapStack.Screen name="MapScreen" component={MapScreen} />
    </MapStack.Navigator>
  );
};
