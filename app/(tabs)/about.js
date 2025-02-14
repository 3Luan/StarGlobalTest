import React from "react";
import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import Header from "../../components/Header";
import Footer from "@/components/Footer";

const AboutScreen = () => {
  return (
    <>
      <View style={styles.content}>
        <Text style={styles.title}>Giới thiệu</Text>
        <Text style={styles.description}>
          Đây là ứng dụng được phát triển bởi nhóm STAR GLOBAL TEST, với mục
          tiêu mang đến trải nghiệm tốt nhất cho người dùng.
        </Text>
        <Image
          source={require("../../assets/images/bg.png")}
          style={styles.image}
        />
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  content: { padding: 20, alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  description: { fontSize: 16, textAlign: "center", marginBottom: 20 },
  image: { width: 200, height: 200, marginBottom: 20 },
});

export default AboutScreen;
