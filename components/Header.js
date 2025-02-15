import { setLocale } from "@/language";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [language, setLanguage] = useState("vi");
  const { colors } = useTheme();

  const toggleLanguage = () => {
    setLocale(language === "vi" ? "vi" : "en");
    setLanguage(language === "vi" ? "en" : "vi");
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <View
      style={[styles.headerContainer, { backgroundColor: colors.background }]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 32, height: 32, marginRight: 8 }}
        />
        <Text style={[styles.headerTitle, { color: colors.primary }]}>
          STAR GLOBAL
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 16 }}>
          <FontAwesome
            name={isDarkMode ? "moon-o" : "sun-o"}
            size={24}
            color="#3b5998"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleLanguage}>
          {language === "vi" ? (
            <Image
              source={require("../assets/images/vietnam.png")}
              style={{ width: 24, height: 24 }}
            />
          ) : (
            <Image
              source={require("../assets/images/english.png")}
              style={{ width: 24, height: 24 }}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },

  headerTitle: { fontSize: 24, fontWeight: "bold" },
  rightContainer: { flexDirection: "row", alignItems: "center" },
});

export default Header;
