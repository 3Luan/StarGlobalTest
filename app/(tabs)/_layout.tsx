import { Tabs } from "expo-router";
import React from "react";
import { Platform, StatusBar } from "react-native";
// import { Colors } from "@/constants/Colors";
// import { useColorScheme } from "@/hooks/useColorScheme";
import Header from "@/components/Header";
import { FontAwesome } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

export default function TabLayout() {
  // const colorScheme = useColorScheme();
  const { t } = useTranslation();

  return (
    <>
      <Tabs
        screenOptions={{
          // tabBarActiveTintColor: Colors[colorScheme ?? "dark"].tint,
          headerShown: false,
          tabBarStyle: Platform.select({
            ios: { position: "absolute" },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: `${t("home")}`,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: `${t("about")}`,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="info-circle" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="postDetails"
          options={{
            href: null,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="file-text" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
