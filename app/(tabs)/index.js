import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import I from "../../language/languageConst";

export default function HomeScreen() {
  const { t } = useTranslation();

  const articles = [
    {
      id: "hero",
      type: "hero",
    },
    {
      id: "1",
      image: require("../../assets/images/post1.png"),
      title: t(`${I.POSTS}.0.title`),
      description: t(`${I.POSTS}.0.description`),
    },
    {
      id: "2",
      image: require("../../assets/images/post2.png"),
      title: t(`${I.POSTS}.1.title`),
      description: t(`${I.POSTS}.1.description`),
    },
    {
      id: "3",
      image: require("../../assets/images/post3.png"),
      title: t(`${I.POSTS}.2.title`),
      description: t(`${I.POSTS}.2.description`),
    },
  ];

  const handleArticlePress = (article) => {
    router.push({
      pathname: "postDetails",
      params: {
        article: JSON.stringify(article),
      },
    });
  };

  const handleSubmit = () => {
    // Alert.alert("Thông báo", "Form đã được gửi thành công!");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Card item={item} onPress={handleArticlePress} />
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <View style={styles.formContainer}>
            <TextInput placeholder="Họ tên" style={styles.input} />
            <TextInput
              placeholder="Email"
              style={styles.input}
              keyboardType="email-address"
            />
            <TextInput
              placeholder="Nội dung"
              style={styles.textArea}
              multiline
              numberOfLines={4}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>{t(I.WELCOME)}</Text>
            </TouchableOpacity>
            <Footer />
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  formContainer: { padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: { color: "#fff", fontSize: 16 },
});
