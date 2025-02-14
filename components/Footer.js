import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { t } from "i18next";
import { useTheme } from "@react-navigation/native";

const Footer = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.footer, { backgroundColor: colors.background }]}>
      <View style={styles.contactContainer}>
        <FontAwesome name="envelope" size={20} color={colors.primary} />
        <Text style={[styles.contactText, { color: colors.primary }]}>
          luanthanhnguyen404@gmail.com
        </Text>
      </View>
      <View style={styles.contactContainer}>
        <FontAwesome name="phone" size={20} color={colors.primary} />
        <Text style={[styles.contactText, { color: colors.primary }]}>
          0961819210 •{" "}
        </Text>
        <FontAwesome name="globe" size={20} color={colors.primary} />
        <TouchableOpacity
          onPress={() => Linking.openURL("https://thanhluan.tech")}
        >
          <Text style={[styles.contactText, { color: colors.primary }]}>
            thanhluan.tech
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.facebook.com/luaan.thanhf")
          }
        >
          <FontAwesome name="facebook" size={24} color="#1186ed" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/3Luan")}
        >
          <FontAwesome name="github" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.instagram.com/luaan.thanhf")
          }
        >
          <FontAwesome name="instagram" size={24} color="#ff08c3" />
        </TouchableOpacity>
      </View>
      <Text style={[styles.policy, { color: colors.primary }]}>
        {t("footer.policy")}
      </Text>
      <Text style={[styles.copy, { color: colors.primary }]}>
        {t("footer.copyright")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#eee",
    alignItems: "center",
    borderRadius: 5,
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  contactText: { marginLeft: 8 },
  icons: { flexDirection: "row", gap: 15, marginBottom: 10 },
  policy: { marginBottom: 10 },
  copy: { fontSize: 12, color: "#777" },
});

export default Footer;
