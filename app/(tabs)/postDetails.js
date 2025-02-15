import {
  StyleSheet,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";

const PostDetailsScreen = () => {
  const { article } = useLocalSearchParams();
  const parsedArticle = JSON.parse(article);
  const { t } = useTranslation();
  const { colors } = useTheme();
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={false} />

      <View
        style={[styles.headerContainer, { backgroundColor: colors.background }]}
      >
        <Text style={[styles.headerTitle, { color: colors.primary }]}>
          Chi tiết bài viết
        </Text>
      </View>

      <TouchableOpacity style={styles.card}>
        <Image
          source={parsedArticle.image}
          style={[styles.cardImage, { backgroundColor: colors.background }]}
        />
        <Text style={[styles.cardTitle, { color: colors.primary }]}>
          {parsedArticle.title}
        </Text>
        <Text style={[styles.cardDescription, { color: colors.primary }]}>
          {parsedArticle.description}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  card: {
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
  cardImage: { width: "100%", height: 150, borderRadius: 8 },
  cardTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 5 },
  cardDescription: { fontSize: 14, marginBottom: 10 },
  readMoreButton: {
    backgroundColor: "#007BFF",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  readMoreText: { color: "#fff", fontSize: 14 },
});

export default PostDetailsScreen;
