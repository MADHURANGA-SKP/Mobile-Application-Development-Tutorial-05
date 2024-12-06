import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const CustomPressable = () => (
  <Pressable style={styles.pressable} onPress={() => alert('Pressed!')}>
    <Text>Press Me</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  pressable: { padding: 10, backgroundColor: 'lightblue', borderRadius: 5 },
});

export default CustomPressable;
