import { Image, StyleSheet, Platform, Text, ImageBackground, View, ScrollView } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <>
      <View style={styles.logoContainer}>
        <ImageBackground
          source={require('@/assets/img/zara-logo.png')} 
          style={styles.logo}
        >
        </ImageBackground>
      </View>

      <ScrollView style={styles.scrollView} 
      showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ImageBackground
            source={require('@/assets/img/home01.jpg')} 
            style={styles.image}
          >
          </ImageBackground>

          <ImageBackground
            source={require('@/assets/img/home02.jpg')} 
            style={styles.image}
          >
          </ImageBackground>

          <ImageBackground
            source={require('@/assets/img/home03.jpg')} 
            style={styles.image}
          >
          </ImageBackground>
          <ImageBackground
            source={require('@/assets/img/home04.jpg')} 
            style={styles.image}
          >
          </ImageBackground>
          <ImageBackground
            source={require('@/assets/img/home05.jpg')} 
            style={styles.image}
          >
          </ImageBackground>
          <ImageBackground
            source={require('@/assets/img/home06.jpg')} 
            style={styles.image}
          >
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
  },
  image: {
    height: 600,
    width: '100%', 
    marginBottom: 5,
  },
  scrollView: {
   
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1, 
  },
  logo: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
