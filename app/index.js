import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ActivityIndicatorExamples from '../components/ActivityIndicatorExamples'
import CustomButton from '../components/CustomButton'
import CustomFlatList from '../components/CustomFlatList'
import CustomImage from '../components/CustomImage'
import CustomImageBackground from '../components/CustomImageBackground'
import CustomKeyboardAvoidingView from '../components/CustomKeyboardAvoidingView'
import CustomModal from '../components/CustomModal'

const Index = () => {
  return (
    <View>
      <ActivityIndicatorExamples/>
      <CustomButton/>
      <CustomFlatList/>
      <CustomImage/>
      <CustomImageBackground/>
      <CustomKeyboardAvoidingView/>
      <CustomModal/>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})