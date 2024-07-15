// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Go to Resume Form"
        onPress={() => navigation.navigate('ResumeForm')}
      />
      <Button
        title="Go to Resume Preview"
        onPress={() => navigation.navigate('ResumePreview')}
      />
      <Button
        title="Responsive Ui"
        onPress={() => navigation.navigate('ResponsiveUi')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
