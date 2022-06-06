import React, {useState} from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity, TextInput } from 'react-native'
import { Actions } from 'react-native-router-flux'
import CheckBox from '@react-native-community/checkbox'

const Login = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const goToWelcome = () => {
    Actions.welcome()
  }
  return (
  <View style={{backgroundColor: '#f8f8f8', height: '100%'}}>
    <Image source={require('../../assets/top.png')} style={styles.topImg}></Image>
    <View style = {styles.container}>
      <View>
        <TouchableOpacity onPress = {goToWelcome}>
            <Image source={require('../../assets/scanning/back.png')} style={{marginTop: 50}}></Image>
        </TouchableOpacity>
      </View>
      <View>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subTitle}>Hi, Welcome back!</Text>
      </View>
    </View>
    <View style={styles.loginForm}>
      <View>
        <TextInput style={styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                autoCapitalize = "none"/>
      </View>
      <View>
        <TextInput style={styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "password"
                autoCapitalize = "none"/>
        <Image source={require('../../assets/home/eye.png')} style={styles.eyeIcon}></Image>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginTop:20}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={{color: '#000'}}>Remember me</Text>
        </View>
        <Text style={{color: '#000'}}>Forgot password?</Text>
      </View>
      <View style={styles.loginBtn}>
        <Image source={require('../../assets/home/login.png')}></Image>
      </View>
      <View style={styles.loginWith}></View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.loginWithTxt}>or log in with</Text>
      </View>
      <View style={styles.loginSocialBtn}>
        <TouchableOpacity>
          <Image source={require('../../assets/home/facebook.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/home/google.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.signUp}>
        <Text>
          Don't have an account?
        </Text>
        <TouchableOpacity>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
   container: {
      position: 'absolute',
      width: '100%',
      paddingLeft: 20,
      paddingRight: 20
   },
   topImg: {
      width: '100%'
   },
   title: {
      fontSize: 30,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 30
   },
   subTitle: {
      color: '#fff',
      paddingTop: 20,
      fontSize: 14,
      textAlign: 'center'
   },

   loginForm: {
      padding: 20
   }, 
   input: {
      backgroundColor: '#fff',
      paddingLeft: 30,
      height: 60,
      borderRadius: 10,
      marginTop: 20
   },

   eyeIcon: {
    position: 'absolute',
    top: 45,
    right: 48
 },
 loginBtn: {
   marginTop: 20,
   flexDirection: 'row',
   justifyContent: 'center'
 },

 loginWith: {
   marginTop: 40,
   borderColor: 'gray',
   borderWidth: 1
 },
 loginWithTxt: {
   padding: 10,
   backgroundColor: '#f8f8f8',
   fontSize: 20,
   textAlign: 'center',
   marginTop: -30,
   width: 180
 },
 loginSocialBtn: {
   flexDirection: 'row',
   justifyContent: 'space-between'
 },
 signUp: {
   marginTop: 20,
   flexDirection: 'row',
   justifyContent: 'center'
 },
 signUpLink: {
   paddingLeft: 10,
   color: 'blue'
 }
   
});
export default Login