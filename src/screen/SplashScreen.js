import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);
  const starAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    Animated.loop(
      Animated.timing(starAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [fadeAnim, starAnim]);

  const starSpin = starAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  

  return (
    <LinearGradient colors={['#203a43', '#0b2027']} style={styles.container}>
      <View style={styles.topRightCircleContainer}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle} />
        </View>
      </View>
      <View style={styles.bottomLeftCircleContainer}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle} />
        </View>
      </View>
      <View style={styles.bottomLeftCircleContainer1}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle} />
        </View>
      </View>
      <View style={styles.bottomLeftCircleContainer2}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle} />
        </View>
      </View>
      

      <Animated.Image
        source={require('../../assets/images/splash.png')}
        style={{ ...styles.image, opacity: fadeAnim }}
      />
      <Text style={styles.text}>Welcome to MyApp</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <LinearGradient colors={['#ff8c00', '#ffa500']} style={styles.buttonBackground}>
            <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signup')}
        >
          <LinearGradient colors={['#ff8c00', '#ffa500']} style={styles.buttonBackground}>
            <Text style={styles.buttonText}>Signup</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRightCircleContainer: {
    position: 'absolute',
    top: -50,
    right: -55,
  },

  bottomLeftCircleContainer: {
    position: 'absolute',
    bottom: 500,
    left: -100,
  },

  bottomLeftCircleContainer1: {
    position: 'absolute',
    bottom: 80,
    left: -100,
  },

  bottomLeftCircleContainer2: {
    position: 'absolute',
    // bottom: 500,
left:320,
top:360
    // left: -100,
  },
  outerCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#ffa500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 125,
    height: 125,
    borderRadius: 80,
    backgroundColor: '#203a43',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 150,
    marginTop: -50,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Cursive',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    margin: 10,
    borderRadius: 30,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
  },
});

export default SplashScreen;
