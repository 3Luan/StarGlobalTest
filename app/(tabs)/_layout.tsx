import { Tabs } from "expo-router";
import React from "react";
import { Platform, StatusBar } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Header from "@/components/Header";
import i18n from "../../language";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar barStyle="dark-content" hidden={false} />
      <Header />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarStyle: Platform.select({
            ios: {
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
          }}
        />
        <Tabs.Screen
          name="postDetails"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </>
  );
}
