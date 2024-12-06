import { StyleSheet, Text,ScrollView, View } from 'react-native'
import React from 'react'
import ActivityIndicatorExamples from '../components/ActivityIndicatorExamples'
import CustomButton from '../components/CustomButton'
import CustomFlatList from '../components/CustomFlatList'
import CustomImage from '../components/CustomImage'
import CustomImageBackground from '../components/CustomImageBackground'
import CustomKeyboardAvoidingView from '../components/CustomKeyboardAvoidingView'
import CustomModal from '../components/CustomModal'
import CustomPressble from '../components/CustomPressble'
import CustomRefreshControl from '../components/CustomRefreshControl'
import CustomScrollView from '../components/CustomScrollView'
import CustomSectionList from '../components/CustomSectionList'

const Index = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={true}
    >

      <Text style={styles.header}>React Native Components (Tutorial 05)</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Activity Indicator</Text>
        <ActivityIndicatorExamples />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Buttons</Text>
        <CustomButton />
        <CustomPressble />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lists</Text>
        <CustomFlatList />
        <CustomSectionList />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Images</Text>
        <CustomImage />
        <CustomImageBackground />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Scroll and Refresh</Text>
        <CustomScrollView />
        <CustomRefreshControl />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Modals and Forms</Text>
        <CustomModal />
        <CustomKeyboardAvoidingView />
      </View>

    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 16, 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#555',
  },
});