import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Dialog from "react-native-dialog"

class Detail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      visible: false
    }
  }

  goToCafe() {
    Actions.cafe()
  }
  goToAdd() {
    Actions.add()
  }
  onIncrease() {
    this.setState({
      count: this.state.count + 1
    });
  }

  showDialog = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  onDecrease() {
    this.setState({
      count: this.state.count - 1
    });
  }
  render() {
    return (
      <View style={{backgroundColor: '#fff', height: '100%'}}>
          <ScrollView>
            <Image source={require('../assets/home/detailImg.png')} style={styles.topImg}></Image>
            <TouchableOpacity onPress={this.goToCafe} style={styles.topNav}>
              <Image source={require('../assets/home/Nav.png')} ></Image>
            </TouchableOpacity>
            <View style={styles.container}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.starGroup}>
                  <Image source={require('../assets/home/star.png')}></Image>
                  <Image source={require('../assets/home/star.png')} style={{marginLeft: 5}}></Image>
                  <Image source={require('../assets/home/star.png')} style={{marginLeft: 5}}></Image>
                  <Image source={require('../assets/home/star.png')} style={{marginLeft: 5}}></Image>
                  <Image source={require('../assets/home/star.png')} style={{marginLeft: 5}}></Image>
                </View>
                <View style={styles.badgeCount}>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>4</Text>
                </View>
              </View>
              <View>
                <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>Caramel Ice-Cream With</Text>
                <Text style={{fontSize: 16, marginTop: 10, lineHeight: 24}}>mixture of milk, cream, sugar, and sometimes other ingredients that has been frozen into a soft, creamy delight using special techniques.</Text>
              </View>
              <View style={styles.detailCost}>
                <View>
                  <Text style={{fontSize: 20, color: '#E83930'}}>$9.95</Text>
                  <Text style={{textAlign: 'right'}}>350g</Text>
                </View>
                <View style={styles.learnMoreBtn}>
                  <Text onPress={this.showDialog.bind(this)}>LEARN MORE</Text>
                </View>
              </View>
              <View style={styles.add}>
                <TouchableOpacity onPress={this.goToAdd.bind(this)}>
                  <Image source={require('../assets/home/add.png')}></Image>
                </TouchableOpacity>
                <View>
                  <Text style={{textAlign: 'center'}}>Quantity</Text>
                  <View style={styles.iconGroup}>
                    <TouchableOpacity onPress={this.onDecrease.bind(this)}>
                      <Image source={require('../assets/home/Icon_minus.png')}></Image>
                    </TouchableOpacity>
                    <Text style={{color: '#000'}}>{this.state.count}</Text>
                    <TouchableOpacity onPress={this.onIncrease.bind(this)}>
                      <Image source={require('../assets/home/icon_plus.png')}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <Dialog.Container visible={this.state.visible} contentStyle={{position: 'absolute', top:-100, right: -212, borderTopLeftRadius: 20, width: '100%', paddingBottom: 200}}>
            <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}} onPress={this.handleCancel.bind(this)}>
              <Text >X</Text>
            </TouchableOpacity>
            <Dialog.Title style={{fontSize: 24}}>Caramel Ice-Cream With</Dialog.Title>
            <Dialog.Description style={{lineHeight: 24, color: 'gray',fontSize: 18}}>
              mixture of milk, cream, sugar, and sometimes other ingredients that has been frozen into a soft, creamy delight using special techniques.
            </Dialog.Description>
            <View style={styles.ingredient}>
              <Text>Ingredient:</Text>
              <Text style={{marginTop: 20}}>Vanila, Chocolate, Cookies, Mint Chocolate, Strawberry</Text>
              <Text style={{marginTop: 20}}>Calories: 350g</Text>
            </View>
          </Dialog.Container>
      </View>
    )
  }
}

const styles = StyleSheet.create({
   container: {
      width: '100%',
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 20
   },
   topImg: {
      width: '100%'
   },
   topNav: {
     position: 'absolute',
     top: 60,
     left: 20
   },
   starGroup: {
      flexDirection: 'row'
   },
   badgeCount: {
      width: 40,
      height: 30,
      borderRadius: 15,
      backgroundColor: '#B520DF',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
   },
   detailCost: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15
   },
   learnMoreBtn: {
     backgroundColor: '#eef3fc',
     width: 138,
     height: 50,
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center'
   },
   add: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     marginTop: 50
   },
   iconGroup: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between'
   },
   ingredient: {
     paddingLeft: 40
   }
   
});
export default Detail