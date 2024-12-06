import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native-web';

const CustomImageBackground = () => {
  return (
    <ImageBackground
    source={require=('./assets/images/tech.jpg')}
    style={styles.background}
  >
    <Text style={styles.text}>Hello, World!</Text>
  </ImageBackground>
);
}

export default CustomImageBackground

const styles = StyleSheet.create({
    background: {
      flex: 5,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    text: {
      color: 'white',
      fontSize: 20,
    },
  });