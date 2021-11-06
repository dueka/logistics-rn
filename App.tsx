import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LoadAssets } from "./src/components";
import { theme } from "./src/components/Theme";
import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";

const assets = [...authenticationAssets];
const fonts = {
  "SFProText-Bold": require("./assets/fonts/SFProText-Bold.ttf"),
  "SFProText-Semibold": require("./assets/fonts/SFProText-Semibold.ttf"),
  "SFProText-Regular": require("./assets/fonts/SFProText-Regular.ttf"),
  "SFProText-Medium": require("./assets/fonts/SFProText-Medium.ttf"),
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
