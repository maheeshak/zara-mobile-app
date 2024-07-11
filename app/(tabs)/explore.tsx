import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { Image } from 'react-native';


export default function TabTwoScreen() {
  return (
    <>

      <Collapsible title="About us">

        <ThemedText>
          Zara is one of the largest international fashion companies. It belongs to Inditex,
          one of the world's largest distribution groups.
        </ThemedText>

        <ThemedText>
          Zara is one of the largest international fashion companies. It belongs to Inditex,
          one of the world's largest distribution groups.
        </ThemedText>
        <Image
          style={styles.tinyLogo}
          source={require('@/assets/img/zara-logo.png')}
        />




      </Collapsible>




    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#000000',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  tinyLogo: {
    width: 200,
    height: 200,

  },

});
