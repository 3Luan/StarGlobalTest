import I from "@/language/languageConst";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Card = ({ item, onPress }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { t } = useTranslation();

  if (item.type === "hero") {
    return (
      <ImageBackground
        source={require("../assets/images/bg.png")}
        style={styles.hero}
      >
        <Text style={styles.title}>{t(I.HEROTITLE)}</Text>
        <Text style={styles.description}>{t(I.HERODESCRIPTION)}</Text>
        <TouchableOpacity style={styles.button} onPress={() => null}>
          <Text style={styles.buttonText}>{t(I.STARTBUTTON)}</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>
        {showFullDescription
          ? item.description
          : `${item.description.slice(0, 100)}... `}
        {!showFullDescription && (
          <Text
            style={styles.readMoreText}
            onPress={() => setShowFullDescription(true)}
          >
            {t(I.READMORE)}
          </Text>
        )}
        {showFullDescription && (
          <Text
            style={styles.readMoreText}
            onPress={() => setShowFullDescription(false)}
          >
            {t(I.SHOWLESS)}
          </Text>
        )}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  hero: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#84c700",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    fontWeight: "bold",
    // color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#ff5c5c",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: { color: "#fff", fontSize: 16 },
  card: {
    padding: 15,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  cardImage: { width: "100%", height: 200, borderRadius: 10, marginBottom: 10 },
  cardTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  cardDescription: { fontSize: 14, color: "#555", marginBottom: 10 },
  readMoreText: { color: "#2196F3", fontSize: 14, fontWeight: "bold" },
});

export default Card;
