import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }
  goToComplete = () => {
    Actions.complete()
  }

  goToHistory = () => {
    Actions.history()
  }

  render() {
    return (
      <View style={{backgroundColor: '#F8F8F8', height: '100%'}}>
        <Image source={require('../assets/top.png')} style={styles.topImg}></Image>
        <View style={styles.container}>
          <View style={styles.iconGroup}>
            <TouchableOpacity onPress={this.goToComplete.bind(this)}>
              <Image source={require('../assets/home/chevron-left.png')}></Image>
            </TouchableOpacity>
            <Image source={require('../assets/home/Icon.png')}></Image>
          </View>
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <Image source={require('../assets/home/croissant.png')}></Image>
              <View style={{paddingLeft: 20}}>
                <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Ana's Cafe</Text>
                <Text style={{color: '#fff'}}>Bakery</Text>
              </View>
            </View>
            <Image source={require('../assets/home/info.png')}></Image>
          </View>
          <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', paddingTop: 30}}>Chat</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.brand}>
              <Image source={require('../assets/home/large-2.png')}></Image>
            </View>
          </View>
        </View>
        <View style={styles.bodyContent}>
          <View style={styles.chatArea}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <View style={styles.meTxtArea}>
                <Text>You:</Text>
                <Text style={styles.msg}>Hello, Could you please change My drink to water please</Text>
              </View>
            </View>
            <View style={styles.resTxtArea}>
                <Text>Restuarant:</Text>
                <Text style={styles.msg}>Sure, the changes are done! Let me know if you need anything else.</Text>
              </View>
            </View>
          <View style={styles.sendBtn}>
            <TouchableOpacity onPress={this.goToHistory.bind(this)}>
              <Image source={require('../assets/home/send.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
   container: {
      position: 'absolute',
      width: '100%',
      paddingLeft: 20,
      paddingRight: 20,
      top: 50
   },
   bodyContent: {
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 60
   },
   topImg: {
      width: '100%'
   },
   iconGroup: {
     flexDirection: 'row',
     justifyContent: 'space-between'
   },
   header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
   },
   headerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
   },
   brand: {
     flexDirection: 'row',
     justifyContent: 'center',
     padding: 20,
     width: '50%',
     marginTop: -30,
     borderRadius: 15,
     backgroundColor: '#fff'
   },
   chatArea: {
     height: 320,
     backgroundColor: '#fff',
     borderRadius: 40,
     paddingTop: 30
   },
   sendBtn: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center'
   },
   meTxtArea: {
    width: '70%',
   },
   resTxtArea: {
    marginTop: 40,
    marginLeft: 20,
    width: '70%',
   },
   msg: {
    color: '#0030b2'
   }
});
export default Chat