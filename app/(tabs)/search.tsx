import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { WebView } from "react-native-webview";
// Card component
const Card = ({ title, description, source }: any) => {
  return (
    <View style={styles.card}>
      <WebView style={styles.webView} source={{ uri: source }} />

      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  );
};

// Search component
const Search = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.linkContainer}>
          <Text>WOMAN</Text>
          <Text>MAN</Text>
          <Text>KIDS</Text>
          <Text>HOME</Text>
        </View>
        <View style={styles.searchBarContainer}>
          <TextInput
            editable
            numberOfLines={1}
            style={styles.searchBar}
            placeholder="Search"
          />
        </View>
        <View style={styles.linkContainerBottom}>
          <Text>STORES    </Text>
          <Text>IMAGE    </Text>
          <Text>SCANNER</Text>
        </View>
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cardContainer}>
          <Card
            title="MOONLIGHT WHISPER 100 ML / 3.38 OZ"
            description="22.99 GBP"
            source="https://static.zara.net/assets/public/34db/42d8/b55e48528afa/11b27301fb43/4000.jpg?ts=1692891220406&w=750"
          />
          <Card
            title="MOONLIGHT WHISPER 100 ML / 3.38 OZ"
            description="22.99 GBP"
            source="https://static.zara.net/assets/public/7926/7013/6c9344348c47/2bb66c40eb2d/4000.jpg?ts=1691502728491&w=850"
          />
          <Card
            title="MOONLIGHT WHISPER 100 ML / 3.38 OZ"
            description="22.99 GBP"
            source="https://static.zara.net/assets/public/ce25/f23e/83a0495ba559/371adf34f621/1679046772930/1679046772930.jpg?ts=1701925014559&w=563"
          />
          <Card
            title="MOONLIGHT WHISPER 100 ML / 3.38 OZ"
            description="22.99 GBP"
            source="https://static.zara.net/assets/public/f682/dddf/77864de89c7e/a439e1659275/1679046766871/1679046766871.jpg?ts=1701724113664&w=563"
          />
          <Card
            title="MOONLIGHT WHISPER 100 ML / 3.38 OZ"
            description="22.99 GBP"
            source="https://static.zara.net/assets/public/7fc2/6754/d0e046e496ba/b48789155d73/4000.jpg?ts=1694509516501&w=563"
          />
          <Card
            title="MOONLIGHT WHISPER 100 ML / 3.38 OZ"
            description="22.99 GBP"
            source="https://static.zara.net/assets/public/3358/e541/355742179859/32586881df8b/20120635999-e1/20120635999-e1.jpg?ts=1714739195766&w=563"
          />
          
        </View>
      </ScrollView>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    height: "auto",
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    paddingBottom: 20,
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    marginLeft: 60,
    marginRight: 60,
  },
  searchBarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
   
  },
  searchBar: {
    height: 40,
    width: 360,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  linkContainerBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 60,
    marginRight: 180,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  card: {
    backgroundColor: "#f9f9f9",
    height: 350,
    width: "48%",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden", // Hide any overflowed content
  },
  cardTitle: {
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  scrollView: {
    margin: 0,
    padding: 0,
  },
  webView: {
    width: "105%",
  },
});
