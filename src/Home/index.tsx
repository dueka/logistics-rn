import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer/Drawer";
import { HomeRoutes } from "../components/Navigation";

const Drawer = createDrawerNavigator<HomeRoutes>();
export { assets } from "./Drawer";
export const HomeNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerStyle: { width: DRAWER_WIDTH },
      headerShown: false,
    }}
    drawerContent={() => <DrawerContent />}
    initialRouteName="HomeScreen"
  >
    <Drawer.Screen name="HomeScreen" component={HomeScreen} />
  </Drawer.Navigator>
);
