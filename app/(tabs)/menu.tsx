import { Text, View, StyleSheet, TextInput } from "react-native";

const Menu = () => {
    return (
      <>
        
        <View style={styles.linkContainer}>
          <Text>WOMAN</Text>
          <Text>MAN</Text>
          <Text>KIDS</Text>
          <Text>BEAUTY</Text>
          <Text>HOME</Text>
        </View>
        <View style = {styles.lineStyle} />

        <View style={styles.newText}>
          <Text>NEW COLLECTION</Text>
        </View>

        <View style={styles.menu}>
          <Text style={styles.sale}>SALE</Text>
          <Text> </Text>
          <Text style={styles.menuText}>From 50% Off</Text>
          <Text style={styles.menuText}>Chosen For You</Text>
          <Text style={styles.menuText}>Jackets | Trench Coats</Text>
          <Text style={styles.menuText}>Blazers</Text>
          <Text style={styles.menuText}>Dresses</Text>
          <Text style={styles.menuText}>Tops | Bodysuits</Text>
          <Text style={styles.menuText}>Shirts</Text>
          <Text style={styles.menuText}>T-Shirts</Text>
          <Text style={styles.menuText}>Skirts</Text>
          <Text style={styles.menuText}>Jeans | Trousers</Text>
          <Text style={styles.menuText}>Shoes</Text>
          <Text style={styles.menuText}>Bags</Text> 
          <Text style={styles.menuText}>Accessories | Perfumes</Text>
          <Text></Text>
        </View>

        <View style={styles.searchBarContainer}>
          <TextInput
            editable
            numberOfLines={1}
            style={styles.searchBar}
            placeholder="Search"
          />
        </View>
        
      </>
    );
  };
  export default Menu;
  
  const styles = StyleSheet.create({
    linkContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 50,
      marginTop: 80,
    },
    lineStyle:{
      borderWidth: 0.5,
      borderColor:'black',
      margin:20,
 },
    newText: {
      marginHorizontal: 50,
      marginTop: 20,
      fontWeight: "bold",
      fontSize: 40,
    },
    menu: {
      backgroundColor: '#E6E6FA',
      flexDirection: "column",
      justifyContent: "space-between",
      marginHorizontal: 50,
      marginTop: 30,
      padding: 6,
      shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 10,
    
    },
    sale:{
fontWeight: "bold",
    },
    menuText: {
    fontSize: 15,
    lineHeight: 30, // Add space between lines
    letterSpacing: 1.5, // Add space between letters
    },
    searchBarContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 25,
     
    },
    searchBar: {
      height: 40,
      width: 350,
      borderColor: "gray",
      borderWidth: 1,
      padding: 10,
    },
  });