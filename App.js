import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  
  const buttonPressed= () => {
    Alert.alert('kirjoitit: '+ text);
  }

  return (
    <View style={styles.container}>
      <Text>Laskin sovellus
      </Text>
      <TextInput 
      style={{width: 200, borderColor: 'blue', borderWidth: 1}}
      onChangeText={text => setText(text)} value={text}/>
      <Button onPress={buttonPressed} title='paina tätä'/>
      <StatusBar style="auto" />
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
