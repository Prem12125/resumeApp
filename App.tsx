// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View, StyleSheet, Platform } from 'react-native';
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <>
      {Platform.OS === 'ios' && <View style={styles.statusBar} />}
      <StatusBar barStyle="light-content" hidden={false} />
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
