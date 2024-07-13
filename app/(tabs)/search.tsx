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
<<<<<<< HEAD
          <Card
            title="Oval CrossBody Bag"
            description="39.99 GBP"
            source="https://static.zara.net/assets/public/8efd/8207/5b2347eb9f3f/fc06d1aaee9f/16020410719-e1/16020410719-e1.jpg?ts=1717078639061&w=317"
          />
          <Card
            title="Contrast Shopper Bag WHISPER 100 ML / 3.38 OZ"
            description="22.99 GBP"
            source="https://static.zara.net/assets/public/f645/93ab/3ec24acea824/15b9486f6279/16025410500-e1/16025410500-e1.jpg?ts=1718351288256&w=317"
          />
          <Card
            title="MINI TOTE BAG "
            description="29.95 GBP"
            source="https://static.zara.net/assets/public/14c2/f63f/11c04640b19e/6b24cb99f5ba/16224410709-e1/16224410709-e1.jpg?ts=1720003276793&w=157"
          />
          <Card
            title="RIGID BAG"
            description="29.95 GBP"
            source="https://static.zara.net/assets/public/db72/de43/54704647b1d4/f594f64f0f05/16542310709-e1/16542310709-e1.jpg?ts=1706777700693&w=157"
          />
          <Card
            title="HANDBAG WITH BOW"
            description="19.95 GBP"
            source="https://static.zara.net/assets/public/f7a6/7dbe/34cf4829a5c3/d315af986eb2/16506410400-e1/16506410400-e1.jpg?ts=1716391837105&w=157"
          />

<Card
            title="GATHERED SHOULDER BAG"
            description="22.95 GBP"
            source="https://static.zara.net/assets/public/fbf3/ab01/b4984252a421/5a669a513e02/16610310600-e1/16610310600-e1.jpg?ts=1710346044278&w=157"
          />
          

          <Card
            title="HIGH HEEL SANDALS"
            description="22.99 GBP"
            source="https://static.zara.net/assets/public/3648/5255/c6fb42839b40/b4a4aca5ff6c/12303410400-e1/12303410400-e1.jpg?ts=1718782534684&w=317"
          />
          <Card
            title="HIGH HEEL VINYLS"
            description="24.99 GBP"
            source="https://static.zara.net/assets/public/901a/daa8/1ad54132bf69/5e72237d06a2/12327110111-e1/12327110111-e1.jpg?ts=1704974006684&w=157"
          />
          <Card
            title="FLAT STRAPPY SLIDES"
            description="22.99 GBP"
            source="https://static.zara.net/assets/public/60e8/edca/3638485e8023/56a91ae5c770/13622410800-e1/13622410800-e1.jpg?ts=1720180665331&w=157"
          />
          <Card
            title="LEATHER CAGE SANDALS"
            description="39.95 GBP"
            source="https://static.zara.net/assets/public/8ad7/dd31/4c244b9884bd/aa8c90984c96/12507310091-e1/12507310091-e1.jpg?ts=1717426075237&w=157"
          />
          <Card
            title="SNEAKERS WITH CONTRASTING SOLES"
            description="22.95 GBP"
            source="https://static.zara.net/assets/public/2410/38d0/200248438fa1/ef7ea51c0e3c/15433310001-e1/15433310001-e1.jpg?ts=1715788311611&w=157"
          />
          <Card
            title="CONTRAST TRAINERS"
            description="29.99 GBP"
            source="https://static.zara.net/assets/public/9611/1ca7/620043ef8753/c3863aa40649/15046310202-e1/15046310202-e1.jpg?ts=1716387879559&w=157"
          />
          <Card
            title="FAUX LEATHER JACKET"
            description="49.95 GBP"
            source="https://static.zara.net/assets/public/ef17/27fb/80f245079287/764ef7d27fbd/03046060800-017-e1/03046060800-017-e1.jpg?ts=1711441898415&w=317"
          />
          <Card
            title="BASIC SATIN JACKET"
            description="19.99 GBP"
            source="https://static.zara.net/assets/public/82ce/07be/40d545fba85e/9fce33ef2d4e/08741256800-015-e1/08741256800-015-e1.jpg?ts=1707397061277&w=157"
          />
          
=======
>>>>>>> refs/remotes/origin/master
          
        </View>
      </ScrollView>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
<<<<<<< HEAD
    //boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
=======
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
>>>>>>> refs/remotes/origin/master
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
<<<<<<< HEAD
   // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
=======
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
>>>>>>> refs/remotes/origin/master
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
