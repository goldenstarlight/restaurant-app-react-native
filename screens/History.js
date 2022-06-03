import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

const History = () => {
   const goToOrderDetail = () => {
      Actions.order_detail()
   }
   const goToDetail = () => {
      Actions.detail()
    }
   return (
      <View style={{backgroundColor: '#F8F8F8', height: '100%'}}>
        <Image source={require('../assets/top.png')} style={styles.topImg}></Image>
        <View style={styles.container}>
          <View style={styles.iconGroup}>
            <TouchableOpacity onPress={goToDetail}>
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
          <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', paddingTop: 30}}>History</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.brand}>
              <Image source={require('../assets/home/large-2.png')}></Image>
            </View>
          </View>
        </View>
        <View style={styles.bodyContent}>
          <View style={styles.foodArea}>
            <Image source={require('../assets/home/additionalImg.png')}></Image>
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 240}}>
                <View style={{paddingLeft: 10, color: '#000'}}>
                  <Text style={{color: '#000'}}>Ana's Cafe</Text>
                  <Text style={{marginTop: 20}}>19.90</Text>
                </View>
                <Image source={require('../assets/home/info1.png')}></Image>
              </View>
            </View>
          </View>
          <View style={styles.order}>
            <TouchableOpacity onPress={goToOrderDetail}>
              <Image source={require('../assets/home/order.png')}></Image>
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
   foodArea: {
     height: 100,
     padding: 15,
     backgroundColor: '#fff',
     borderRadius: 20,
     flexDirection: 'row'
   },
   priceInfo: {
    marginTop: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
   },
   subTotal: {
     fontSize: 18
   },
   total: {
     fontSize: 20,
     fontWeight: 'bold',
     color: '#000'
   },
   order: {
     flexDirection: 'row',
     justifyContent: 'center',
     marginTop: 250
   }
});
export default History