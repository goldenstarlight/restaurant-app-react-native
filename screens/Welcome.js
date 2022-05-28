import React,{ useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Animated, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default function Welcome() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true
    }).start();
  }, []);

  const goToHome = () => {
    Actions.home()
 }
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/welcome.png')} resizeMode="cover" style={styles.image}>
        <Animated.View
          style={
            {
              opacity: fadeAnim
            }
          }
        >
          <TouchableOpacity onPress = {goToHome}>
            <Text style={styles.text}>Welcome...</Text>
          </TouchableOpacity>
        </Animated.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  }
});
