import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: require('../assets/home/card.png'),
      btnCardStyle: {
        backgroundColor: '#B620E0',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5
      },
      btnCashStyle: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5
      },
      btnPaypalStyle: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5
      },
      cardColor: '#fff',
      cashColor: 'gray',
      paypalColor: 'gray',
      onPaypal: false,
      onAddable: false,
      card: 1
    }
  }
  goToAdd = () => {
    Actions.add()
  }
  goToOrder = () => {
    Actions.order()
  }
  onCard = () => {
    this.setState({
      imgSrc: require('../assets/home/card.png'),
      btnCardStyle: {
        backgroundColor: '#B620E0',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5
      },
      btnPaypalStyle: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5
      },
      btnCashStyle: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5
      },
      cardColor: '#fff',
      cashColor: 'gray',
      paypalColor: 'gray',
      onPaypal: false,
      card: 1

    })
  }
  onCash = () => {
    this.setState({
      imgSrc: require('../assets/home/cash.png'),
      btnCardStyle: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5
      },
      btnPaypalStyle: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5
      },
      btnCashStyle: {
        backgroundColor: '#B620E0',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5
      },
      cardColor: 'gray',
      cashColor: '#fff',
      paypalColor: 'gray',
      onPaypal: false,
      card: 0,
      onAddable: false
    })
  }

  onPaypal = () => {
    this.setState({
      btnCardStyle: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5
      },
      btnPaypalStyle: {
        backgroundColor: '#B620E0',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5
      },
      btnCashStyle: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5
      },
      cardColor: 'gray',
      cashColor: 'gray',
      paypalColor: '#fff',
      onPaypal: true,
      onAddable: false
    })
  }
  onAddCard = () => {
    this.setState({
      onAddable: true
    });
  }
  onNoneAddCard = () => {
    this.setState({
      onAddable: false
    });
  }
  render() {
    return (
       <ScrollView style={{backgroundColor: '#F8F8F8', height: '100%'}}>
         <Image source={require('../assets/top.png')} style={styles.topImg}></Image>
         <View style={styles.container}>
           <View style={styles.iconGroup}>
             <TouchableOpacity onPress={this.goToAdd.bind(this)}>
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
           <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', paddingTop: 30}}>Payment</Text>
           <View style={{flexDirection: 'row', justifyContent: 'center'}}>
             <View style={styles.brand}>
               <Image source={require('../assets/home/large-2.png')}></Image>
             </View>
           </View>
         </View>
         <View style={styles.bodyContent}>
           <Text style={{fontSize: 24, color: '#000', fontWeight: 'bold'}}>Pay</Text>
           <View style={styles.btnGroup}>
             <TouchableOpacity onPress={this.onCard.bind(this)}>
               <View style={this.state.btnCardStyle}>
                 <Text style={{color: this.state.cardColor}}>By Card</Text>
               </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={this.onPaypal.bind(this)}>
               <View style={this.state.btnPaypalStyle}>
                 <Text style={{color: this.state.paypalColor}}>Paypal</Text>
               </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={this.onCash.bind(this)}>
               <View style={this.state.btnCashStyle}>
                 <Text style={{color: this.state.cashColor}}>Cash</Text>
               </View>
             </TouchableOpacity>
           </View>
           {
            this.state.onAddable == false ?
            <View>
              {
                this.state.onPaypal == false ?
                <View style={styles.payMethod}>
                    {
                      this.state.card == 1 ?
                      <TouchableOpacity onPress={this.state.card == 1 ? this.onAddCard.bind(this): this.onNoneAddCard.bind(this)}>
                        <Image source={this.state.imgSrc}></Image>
                      </TouchableOpacity>:
                      <Image source={this.state.imgSrc}></Image>
                    }
                </View> :
                <View style={{marginTop: 30, paddingBottom: 80}}>
                  <Text style={{textAlign: 'left'}}>Add a new paypal</Text>
                  <Image source={require('../assets/home/Paypal.png')} style={{marginTop:10, width: '100%'}}></Image>
                </View>
              }
            </View>: 
            <View>
              <View style={styles.addCardBody}>
                <Text style={{fontSize: 20, color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>Add a new Card</Text>
                <Text style={{fontSize: 40, color: '#fff'}}>+</Text>
              </View>
              <View style={{marginBottom: 40}}>
                <Text style={styles.label}>Card holder Name</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Tony Nguyem"
                  autoCapitalize = "none"/>
                <Text style={styles.label}>Card Number</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "1234567891234567"
                  autoCapitalize = "none"/>
                <View style={styles.footerInput}>
                  <View style={{width: 100}}>
                    <Text style={styles.label}>Date of Exp</Text>
                    <TextInput style={styles.input}
                      underlineColorAndroid = "transparent"
                      placeholder = "01/26"
                      autoCapitalize = "none"/>
                  </View>
                  <View style={{width: 100}}>
                    <Text style={styles.label}>CCV</Text>
                    <TextInput style={styles.input}
                      underlineColorAndroid = "transparent"
                      placeholder = "575"
                      autoCapitalize = "none"/>
                  </View>
                </View>
              </View>
              <View style={styles.priceInfo}>
                <View>
                  <Text style={styles.subTotal}>Sub Total:</Text>
                  <Text style={styles.total}>Total:</Text>
                </View>
                <View>
                  <Text style={styles.subTotal}>$19.90</Text>
                  <Text style={styles.total}>$19.90</Text>
                </View>
              </View>
              <View style={styles.order}>
                <TouchableOpacity onPress={this.goToOrder.bind(this)}>
                  <Image source={require('../assets/home/order.png')}></Image>
                </TouchableOpacity>
              </View>
            </View>
           }
           {
           this.state.onAddable == false ?
           <View>
            <View style={styles.priceInfo}>
              <View>
                <Text style={styles.subTotal}>Sub Total:</Text>
                <Text style={styles.total}>Total:</Text>
              </View>
              <View>
                <Text style={styles.subTotal}>$19.90</Text>
                <Text style={styles.total}>$19.90</Text>
              </View>
            </View>
            <View style={styles.order}>
              {
                this.state.onPaypal == false ?
                <TouchableOpacity onPress={this.goToOrder.bind(this)}>
                  <Image source={require('../assets/home/order.png')}></Image>
                </TouchableOpacity>:
                <TouchableOpacity onPress={this.goToOrder.bind(this)}>
                  <Image source={require('../assets/home/paypal-btn.png')}></Image>
                </TouchableOpacity>
              }
            </View>

           </View>: <Text></Text>
          }
         </View>
       </ScrollView>
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
   btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15
  },
  btnActive: {
    backgroundColor: '#B620E0',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5
  },
  btn: {
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5
  },
   priceInfo: {
    marginTop: -10,
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
     marginTop: 20
   },
   payMethod: {
     flexDirection: 'row',
     justifyContent: 'center',
     marginTop: -20
   },
   addCardBody: {
     height: 150,
     marginTop: 20,
     backgroundColor: '#B620E0',
     borderRadius: 20,
     padding: 30,
     marginBottom: 30
   },
   input: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingLeft: 20
  },
  label: {
    color: '#000',
    paddingBottom: 20,
    paddingTop: 20
  },
  footerInput: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default Payment