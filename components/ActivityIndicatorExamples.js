import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const ActivityIndicatorExamples = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#ff00bf" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default ActivityIndicatorExamples;
