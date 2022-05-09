import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, SafeAreaView } from 'react-native';


//installations for Swiper
/*
npm install react-native-swiper-flatlist --save
npm uninstall react-native-swiper-flatlist --save

Swiper import require - {Dimensions} from 'react-native' / {SwiperFlatList} from 'react-native-swiper-flatlist'

npm i react-native-swiper --save

Notes on  usage
<Swiper style={styles.wrapper} 
     showsButtons = { true }
     autoplay = { true }>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
</Swiper>
*/

/* Installation for ReactNativeSvg
https://www.npmjs.com/package/react-native-svg

expo install react-native-svg
npm install react-native-svg
*/

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        The whole code is not going to work. I have reset things here to let you continue.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
