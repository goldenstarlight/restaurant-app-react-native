import React, {useState, useRef} from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import SelectDropdown from 'react-native-select-dropdown'	
import PhoneInput from 'react-native-phone-number-input'
import { Link } from '@react-navigation/native'

const countries = ["United States", "United Kingdom", "Indonesian"]
const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);
 
  const getPhoneNumber = () => {
    Alert.alert(phoneNumber);
  };
 
  const goToLogin = () => {
    Actions.login()
  }
  return (
  <ScrollView style={{backgroundColor: '#f8f8f8', height: '100%'}}>
    <Image source={require('../../assets/top.png')} style={styles.topImg}></Image>
    <View style = {styles.container}>
      <View>
        <TouchableOpacity onPress = {goToLogin}>
            <Image source={require('../../assets/home/back.png')} style={{marginTop: 50}}></Image>
        </TouchableOpacity>
      </View>
      <View>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subTitle}>Let's create your account!</Text>
      </View>
    </View>
    <View style={styles.registerForm}>
      <View>
        <TextInput style={styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Name"
                autoCapitalize = "none"/>
      </View>
      <View>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
          dropdownIconPosition='right'
          defaultButtonText='Country'
          buttonStyle={ styles.select }
          buttonTextStyle={{color: '#000'}}
        />
      </View>
      <View>
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="US"
          layout="first"
          containerStyle={styles.phoneNumberView}
          textContainerStyle={{ paddingVertical: 0, backgroundColor: '#fff' }}
          onChangeFormattedText={text => {
            setPhoneNumber(text);
          }}
        />
        <Image source={require('../../assets/home/arrow_down.png')} style={{position: 'absolute', top: 30, right: 10}}></Image>
      </View>
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
      <View style={{marginTop: 20}}>
        <Text style={{textAlign: 'center', color: '#000'}}>
          By tapping sign up you agree to the <Link to='' style={{color: 'blue'}}>Terms and Condition </Link>
          and <Link to='' style={{color: 'blue'}}>Privacy Policy</Link> of this app
        </Text>
      </View>
      <TouchableOpacity style={styles.registerBtn} onPress={goToLogin}>
        <Image source={require('../../assets/home/signup.png')}></Image>
      </TouchableOpacity>
      <View style={styles.registerWith}></View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.registerWithTxt}>or sign up with</Text>
      </View>
      <View style={styles.registerSocialBtn}>
        <TouchableOpacity>
          <Image source={require('../../assets/home/facebook.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/home/google.png')}></Image>
        </TouchableOpacity>
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

  registerForm: {
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
  select: {
    backgroundColor: '#fff', 
    borderRadius: 15, 
    width: '100%', 
    marginTop: 20
  },
  phoneNumberView: {
    width: '100%',
    height: 50,
    marginTop: 20,
    backgroundColor: 'white'
  },
  registerBtn: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  registerWith: {
    marginTop: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  registerWithTxt: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    fontSize: 20,
    textAlign: 'center',
    marginTop: -30,
    width: 180
  },
  registerSocialBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default Register