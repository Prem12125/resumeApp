// src/screen/LoginScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Web3Auth } from '@web3auth/react-native-sdk';

const LoginScreen = ({ navigation }) => {
  const handleWeb3AuthLogin = async () => {
    try {
      const web3auth = new Web3Auth({
        clientId: 'YOUR_WEB3AUTH_CLIENT_ID', 
      });
      const provider = await web3auth.connect();
      console.log('Login successful:', provider);
      navigation.replace('Main');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <TouchableOpacity style={styles.button} onPress={handleWeb3AuthLogin}>
        <Text style={styles.buttonText}>Login with Web3Auth</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4c669f',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default LoginScreen;
