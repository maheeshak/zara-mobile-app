import { Link } from 'expo-router';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href="/(tabs)">
        <ImageBackground
          source={require('@/assets/img/zara-logo.png')} // Adjust path if necessary
          style={styles.logo}
        >
         
        </ImageBackground>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: 'white',
    fontSize: 18,
  },
});
