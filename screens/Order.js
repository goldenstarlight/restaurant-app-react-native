import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusTxt: 'Cooking',
      color: 'blue'
    }
  }
  goToNewOrder = () => {
    Actions.cafe()
  }
  goToPayment = () => {
    Actions.payment()
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        statusTxt: 'Completed',
        color: 'red'
      })
    }, 3000);
    setTimeout(() => {
      this.setState({
        statusTxt: 'Awaiting',
        color: 'blue'
      })
    }, 6000);
    setTimeout(() => {
      Actions.complete()
    }, 8000);
  }
  render() {
    return (
      <View style={{backgroundColor: '#F8F8F8', height: '100%'}}>
        <Image source={require('../assets/top.png')} style={styles.topImg}></Image>
        <View style={styles.container}>
          <View style={styles.iconGroup}>
            <TouchableOpacity onPress={this.goToPayment.bind(this)}>
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
          <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', paddingTop: 30}}>Orders</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.brand}>
              <Image source={require('../assets/home/large-2.png')}></Image>
            </View>
          </View>
        </View>
        <View style={styles.bodyContent}>
          <View style={styles.orderDetail}>
            <View>
              <Text style={{fontSize: 18, color: '#000'}}>Caramel Ice-Cream With Beries</Text>
              <Text style={{fontSize: 20, color: this.state.color}}>{this.state.statusTxt}</Text>
            </View>
            <Text style={{fontSize: 18, color: '#000'}}>2</Text>
          </View>
          <View style={styles.order}>
            <TouchableOpacity onPress={this.goToNewOrder.bind(this)}>
              <Image source={require('../assets/home/new_order.png')}></Image>
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
   orderDetail: {
     height: 300,
     padding: 15,
     backgroundColor: '#fff',
     borderRadius: 20,
     flexDirection: 'row',
     justifyContent: 'space-between'
   },
   order: {
     flexDirection: 'row',
     justifyContent: 'center',
     marginTop: 50
   }
});
export default Order