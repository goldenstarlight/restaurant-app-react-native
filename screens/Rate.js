import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Rate extends React.Component {
  constructor(props) {
    super(props);
  }
  goToComplete = () => {
    Actions.complete()
  }

  componentDidMount = () => {
    setTimeout(() => {
      Actions.chat();
    }, 3000);
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
          <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', paddingTop: 30}}>Rate</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.brand}>
              <Image source={require('../assets/home/large-2.png')}></Image>
            </View>
          </View>
        </View>
        <View style={styles.bodyContent}>
          <View style={styles.rateArea}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000', textAlign: 'center'}}>Please Rate Your Food</Text>
            <View style={styles.starGroup}>
              <Image source={require('../assets/home/star.png')} style={{width: 15}}></Image>
              <Image source={require('../assets/home/star.png')} style={{marginLeft: 5, width: 15}}></Image>
              <Image source={require('../assets/home/star.png')} style={{marginLeft: 5, width: 15}}></Image>
              <Image source={require('../assets/home/star.png')} style={{marginLeft: 5, width: 15}}></Image>
              <Image source={require('../assets/home/star.png')} style={{marginLeft: 5, width: 15}}></Image>
            </View>
          </View>
          <Text style={{marginTop:150, textAlign: 'center', fontSize: 20, color: '#000', fontWeight: 'bold'}}>Thank You!</Text>
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
   rateArea: {
     height: 150,
     backgroundColor: '#fff',
     borderRadius: 40,
     paddingTop: 30
   },
   starGroup: {
     flexDirection: 'row',
     justifyContent: 'center',
     marginTop: 30
   }
});
export default Rate