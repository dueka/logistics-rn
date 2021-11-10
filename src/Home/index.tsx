import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import { HomeRoutes } from "../components/Navigation";

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="HomeScreen"
  >
    <Drawer.Screen name="HomeScreen" component={HomeScreen} />
  </Drawer.Navigator>
);
