import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import "react-native-reanimated";

import { Provider } from "react-redux";
import { store } from "@/app/redux/store"; // adjust the path if necessary

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require("../assets/fonts/Inter_18pt-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth-pages)" options={{ headerShown: false }} />
        <Stack.Screen name="(account-pages)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </Provider>
  );
}
