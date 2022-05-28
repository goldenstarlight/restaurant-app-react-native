import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

const Scan = () => {
   const goToHome = () => {
      Actions.home()
   }
   return (
      <View style={{backgroundColor: '#fff', height: '100%'}}>
         <Image source={require('../assets/top.png')} style={styles.topImg}></Image>
         <View style = {styles.container}>
            <View>
            <TouchableOpacity onPress = {goToHome}>
                <Image source={require('../assets/scanning/back.png')} style={{marginTop: 50}}></Image>
            </TouchableOpacity>
            </View>
            <View>
               <Text style={styles.title}>Scanning</Text>
               <Text style={styles.subTitle}>Please scan the LoadWide QR to the translation in your native language</Text>
            </View>
         </View>
         <View style={styles.qrCodeBody}>
          <Image source={require('../assets/scanning/qrcode.png')}></Image>
         </View>
         <View style={styles.scanBtn}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Scanning...</Text>
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
      textAlign: 'center'
   },
   subTitle: {
      color: '#fff',
      paddingTop: 30,
      fontSize: 14,
      textAlign: 'center'
   },
   qrCodeBody: {
     backgroundColor: '#F8F8F8',
     marginTop: 50,
     flexDirection:'column',
     alignItems: 'center',
     marginLeft: 20,
     marginRight: 20,
     borderRadius: 30
   },
   scanBtn: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    height: 50,
    width: 352,
    backgroundColor: '#8F67E8',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
   },
   
});
export default Scan