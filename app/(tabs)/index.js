import React, { useState } from "react";
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
import { useTheme } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";

export default function HomeScreen() {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

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

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async () => {
    if (!name.trim()) {
      Alert.alert(t("form.info"), t("form.nameRequired"));
      return;
    }
    if (!email.trim()) {
      Alert.alert(t("form.info"), t("form.emailRequired"));
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert(t("form.info"), t("form.emailSelected"));
      return;
    }
    if (!content.trim()) {
      Alert.alert(t("form.info"), t("form.contentRequired"));
      return;
    }

    const options = {
      recipients: ["luanthanhnguyen404@gmail.com"],
      subject: "",
      body: `Name: ${name}\nEmail: ${email}\nContent: ${content}`,
    };

    try {
      const result = await MailComposer.composeAsync(options);
      if (result.status === "sent") {
        Alert.alert(t("form.success"), t("form.emailSent"));
      } else {
        Alert.alert(t("form.error"), t("form.emailNotSent"));
      }
    } catch (error) {
      Alert.alert(t("form.error"), t("form.emailNotSent"));
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Card item={item} onPress={handleArticlePress} />
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <View style={styles.formContainer}>
            <TextInput
              placeholder={t("form.namePlaceholder")}
              placeholderTextColor={colors.primary}
              style={[styles.input, { color: colors.primary }]}
              value={name}
              onChangeText={setName}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={colors.primary}
              style={[styles.input, { color: colors.primary }]}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder={t("form.contentPlaceholder")}
              placeholderTextColor={colors.primary}
              style={[styles.textArea, { color: colors.primary }]}
              multiline
              numberOfLines={4}
              value={content}
              onChangeText={setContent}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>
                {t("form.submitButton")}
              </Text>
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
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  textArea: {
    borderWidth: 1,
    borderColor: "gray",
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
