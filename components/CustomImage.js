import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const CustomImage = () => {
  return (
<View style={styles.container}>
    <Image
      source={require=('./assets/images/Profile.png')}
      style={styles.image}
    />
  </View>
);
}

export default CustomImage


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    image: {
      width: 200,
      height: 200,
      margin: 10,
    },
  });
  