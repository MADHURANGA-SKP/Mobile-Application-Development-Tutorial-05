import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-web';

const CustomKeyboardAvoidingView = () => {
  const [text, setText] = useState('');
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
    <TextInput
      style={styles.input}
      placeholder="Enter text"
      value={text}
      onChangeText={setText}
    />
    <Button title="Submit" onPress={() => console.log(text)} />
  </KeyboardAvoidingView>
);
};


export default CustomKeyboardAvoidingView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    padding: 10,
    margin: 10,
  },
  });