import { StyleSheet, Text, View, Button} from 'react-native'
import React, { useState } from 'react'
import { Modal } from 'react-native-web';

const CustomModal = () => {
    const [visible, setVisible] = useState(false);
  return (
<View style={styles.container}>
      <Button title="Show Modal" onPress={() => setVisible(true)} />
      <Modal visible={visible} transparent={true}>
        <View style={styles.modal}>
          <Text>This is a modal</Text>
          <Button title="Close" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    modal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
      margin: 10,
    },
  });