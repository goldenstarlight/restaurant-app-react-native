import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

const ForgotPassword = () => {

  const goToLogin = () => {
    Actions.login()
  }

  return (
  <View style={{backgroundColor: '#f8f8f8', height: '100%'}}>
    <Image source={require('../../assets/top.png')} style={styles.topImg}></Image>
    <View style = {styles.container}>
      <View>
        <TouchableOpacity onPress = {goToLogin}>
            <Image source={require('../../assets/home/back.png')} style={{marginTop: 50}}></Image>
        </TouchableOpacity>
      </View>
      <View>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subTitle}>You'll get messages soon on your e-mail address</Text>
      </View>
    </View>
    <View style={styles.content}>
      <View style={styles.emailArea}>
        <Text>Email</Text>
        <Text style={{color: '#000'}}>webmaster@gmail.com</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.sendBtn} onPress={goToLogin}>
      <Image source={require('../../assets/home/sendforgotbtn.png')}></Image>
    </TouchableOpacity>
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

  content: {
    marginTop: 20,
    padding: 20
  },
  emailArea: {
    height: 80,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15
  },
  sendBtn: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
  
});
export default ForgotPassword