// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        {/* <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Ionicons name="person-circle-outline" size={30} color="black" />
        </TouchableOpacity> */}
      
      </View>
      <Text style={styles.title}>Home Screen</Text>
      {/* <TestScreen></TestScreen> */}
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
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 37,
    margin: 5,
  },
  input: {
    flex: 1,
    padding: 10,
    color: '#424242',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
