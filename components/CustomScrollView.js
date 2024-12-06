import React from 'react';
import { ScrollView, Text } from 'react-native';

const CustomScrollView = () => (
  <ScrollView>
    {Array(30)
      .fill(null)
      .map((_, index) => (
        <Text key={index}>Item {index + 1}</Text>
      ))}
  </ScrollView>
);

export default CustomScrollView;
