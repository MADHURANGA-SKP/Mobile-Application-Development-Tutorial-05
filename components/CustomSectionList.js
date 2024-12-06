import React from 'react';
import { SectionList, Text, StyleSheet } from 'react-native';

const DATA = [
  { title: 'Section 1', data: ['Item 1', 'Item 2'] },
  { title: 'Section 2', data: ['Item 3', 'Item 4'] },
];

const CustomSectionList = () => (
  <SectionList
    sections={DATA}
    keyExtractor={(item, index) => index}
    renderItem={({ item }) => <Text>{item}</Text>}
    renderSectionHeader={({ section }) => <Text style={styles.header}>{section.title}</Text>}
  />
);

const styles = StyleSheet.create({
  header: { fontWeight: 'bold', padding: 5, backgroundColor: '#eee' },
});

export default CustomSectionList;
