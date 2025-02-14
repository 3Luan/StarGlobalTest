import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import DarkMode from "@/utils/darkmode.context";
import Header from "@/components/Header";
import { StatusBar } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [useDeviceSettings, setUseDeviceSettings] = useState(false);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const CustomDarkTheme: Theme = {
    ...DarkTheme,
    dark: true,
    colors: {
      ...DarkTheme.colors,
      primary: "white",
      background: "#202120", // màu nền toàn app
      card: "#202120", // màu navbar
      text: "white",
    },
  };

  const CustomDefaultTheme: Theme = {
    ...DefaultTheme,
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: "black",
      background: "#f0f0f0", // màu nền toàn app cho light mode
      card: "#ffffff", // màu navbar cho light mode
      text: "black",
    },
  };

  return (
    <DarkMode.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        useDeviceSettings,
        setUseDeviceSettings(prev) {},
      }}
    >
      <ThemeProvider value={isDarkMode ? CustomDarkTheme : CustomDefaultTheme}>
        <StatusBar barStyle="dark-content" hidden={false} />
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </DarkMode.Provider>
  );
}
