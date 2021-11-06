import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../components/Navigation";
import Onboarding, { assets as onBoardingAssets } from "./Onboarding";
import Welcome, { assets as WelcomeAssets } from "./Welcome";
import { Login } from "./Login";
export const assets = [...onBoardingAssets, ...WelcomeAssets];

const AuthenticationStack = createStackNavigator<Routes>();
export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerShown: false,
      }}
    >
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};
