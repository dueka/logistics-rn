import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";
import { LoadAssets } from "./src/components";
import { theme } from "./src/components/Theme";
import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";
import { HomeNavigator, assets as homeAssets } from "./src/Home";
import { AppRoutes } from "./src/components/Navigation";
const assets = [...authenticationAssets, ...homeAssets];
const fonts = {
  "SFProText-Bold": require("./assets/fonts/SFProText-Bold.ttf"),
  "SFProText-Semibold": require("./assets/fonts/SFProText-Semibold.ttf"),
  "SFProText-Regular": require("./assets/fonts/SFProText-Regular.ttf"),
  "SFProText-Medium": require("./assets/fonts/SFProText-Medium.ttf"),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LoadAssets {...{ fonts, assets }}>
          <SafeAreaProvider>
            <AppStack.Navigator
              screenOptions={{
                headerMode: "screen",
                headerShown: false,
              }}
            >
              <AppStack.Screen
                name="Authentication"
                component={AuthenticationNavigator}
              />
              <AppStack.Screen name="Home" component={HomeNavigator} />
            </AppStack.Navigator>
          </SafeAreaProvider>
        </LoadAssets>
      </ThemeProvider>
    </Provider>
  );
}
