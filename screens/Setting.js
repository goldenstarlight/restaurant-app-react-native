import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'

const settings = [
  {
    img: require('../assets/home/1.png'),
    title: 'Loardwid',
    description: 'How does it work?'
  },
  {
    img: require('../assets/home/4.png'),
    title: 'Information',
    description: 'FAQ'
  },
  {
    img: require('../assets/home/2.png'),
    title: 'History',
    description: 'Clear'
  },
  {
    img: require('../assets/home/3.png'),
    title: 'Your Email',
    description: 'webmaster@gmail.com'
  },
  {
    img: require('../assets/home/3.png'),
    title: 'Your name',
    description: 'Gabriela'
  },
  {
    img: require('../assets/home/3.png'),
    title: 'Your password',
    description: 'Gems******'
  },
  {
    img: require('../assets/home/5.png'),
    title: 'Support',
    description: 'Send an email'
  },
]
const Setting = () => {

  const goToHome = () => {
    Actions.home()
  }

  return (
  <ScrollView style={{backgroundColor: '#f8f8f8', height: '100%'}}>
    <Image source={require('../assets/top.png')} style={styles.topImg}></Image>
    <View style = {styles.container}>
      <View>
        <TouchableOpacity onPress = {goToHome}>
          <Image source={require('../assets/home/back.png')} style={{marginTop: 50}}></Image>
        </TouchableOpacity>
      </View>
      <View>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subTitle}>You'll get messages soon on your e-mail address</Text>
      </View>
    </View>
    <View style={styles.content}>
      {settings.map((setting, index) => (
        <TouchableOpacity style={styles.settingArea}>
          <View>
            <Image source={setting.img}></Image>
          </View>
          <View style={{marginLeft: 20}}>
            <Text>{setting.title}</Text>
            <Text style={{color: '#000'}}>{setting.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <View style={styles.shareBtn}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Share</Text>
        <Image source={require('../assets/home/googleIcon.png')}></Image>
        <Image source={require('../assets/home/facebookIcon.png')}></Image>

      </View>
    </View>
  </ScrollView>
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
  settingArea: {
    height: 80,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  sendBtn: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  shareBtn: {
    width: 200,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#8f67e8',
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
  
});
export default Setting