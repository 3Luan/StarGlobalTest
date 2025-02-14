import Footer from "@/components/Footer";
import I from "@/language/languageConst";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";

const AboutScreen = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={[styles.title, { color: colors.primary }]}>
            {t(I.ABOUT)}
          </Text>
          <Text style={[styles.description, { color: colors.primary }]}>
            {t(I.ABOUTDESCRIPTION)}
          </Text>
          <Image
            source={require("../../assets/images/bg.png")}
            style={styles.image}
          />
        </View>
      </ScrollView>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  scrollContent: { flexGrow: 1 },
  content: { padding: 15, alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  description: { fontSize: 16, textAlign: "center", marginBottom: 5 },
  image: { width: 200, height: 200 },
});

export default AboutScreen;
