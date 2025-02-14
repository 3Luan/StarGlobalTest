import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Footer = () => {
  const [language, setLanguage] = useState("vi");

  const toggleLanguage = () => {
    setLanguage(language === "vi" ? "en" : "vi");
  };

  return (
    <View style={styles.footer}>
      <Text style={styles.contact}>
        {language === "vi"
          ? "Liên hệ: contact@example.com"
          : "Contact: contact@example.com"}
      </Text>
      <View style={styles.icons}>
        <FontAwesome name="facebook" size={24} color="#3b5998" />
        <FontAwesome name="twitter" size={24} color="#00acee" />
        <FontAwesome name="instagram" size={24} color="#C13584" />
      </View>
      <Text style={styles.policy}>
        {language === "vi"
          ? "Chính sách bảo mật | Điều khoản sử dụng"
          : "Privacy Policy | Terms of Use"}
      </Text>
      <TouchableOpacity onPress={toggleLanguage} style={styles.button}>
        <Text>{language === "vi" ? "English" : "Tiếng Việt"}</Text>
      </TouchableOpacity>
      <Text style={styles.copy}>© 2025 STAR GLOBAL TEST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: { padding: 20, backgroundColor: "#eee", alignItems: "center" },
  contact: { marginBottom: 10 },
  icons: { flexDirection: "row", gap: 15, marginBottom: 10 },
  policy: { marginBottom: 10 },
  button: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
  copy: { fontSize: 12, color: "#777" },
});

export default Footer;
