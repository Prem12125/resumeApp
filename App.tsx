// App.js
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View, StyleSheet, Platform } from 'react-native';
import AppNavigator from './AppNavigator';
import React, { useEffect } from 'react';
const App = () => {
 
  return (
    <>
      {Platform.OS === 'ios' && <View style={styles.statusBar} />}
      <StatusBar barStyle="light-content" hidden={true} />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: 'black',
  },
});

export default App;

