import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { Actions } from 'react-native-router-flux'

const countries = ["Dessert", "Food", "Soup"]
const foods = [
  {
    id: 1,
    name: 'Caramel Cake With',
    cost: '$16.95',
    src: require('../assets/home/img1.png')
  },
  {
    id: 2,
    name: 'CheesCake With',
    cost: '$16.95',
    src: require('../assets/home/img2.png')
  },
  {
    id: 3,
    name: 'Chocolate Cake',
    cost: '$16.95',
    src: require('../assets/home/img3.png')
  },
  {
    id: 4,
    name: 'Ice-Cream With',
    cost: '$16.95',
    src: require('../assets/home/img4.png')
  }
]

const Cafe = () => {
   const goToHome = () => {
      Actions.home()
   }
   const goToDetail = () => {
      Actions.detail()
    }
   return (
      <View style={{backgroundColor: '#F8F8F8', height: '100%'}}>
        <Image source={require('../assets/top.png')} style={styles.topImg}></Image>
        <View style={styles.container}>
          <View style={styles.iconGroup}>
            <TouchableOpacity onPress={goToHome}>
              <Image source={require('../assets/home/plus.png')}></Image>
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
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.brand}>
              <Image source={require('../assets/home/large-2.png')}></Image>
            </View>
          </View>
        </View>
        <View style={styles.btnGroup}>
        <TouchableOpacity>
          <View style={styles.btnActive}>
            <Text style={{color:'#fff'}}>English</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text>French</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text>Spanish</Text>
          </View>
        </TouchableOpacity>
        </View>
        <ImageBackground source={require('../assets/welcome.png')} resizeMode="cover" style={styles.image}>
        </ImageBackground>
        <View style={{marginLeft:20, marginTop: 20}}>
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
            buttonStyle={{backgroundColor: '#8F67E9', width: 150, borderRadius: 15 }}
            buttonTextStyle={{color: '#fff'}}
          />
          <Image source={require('../assets/home/arrow_dow.png')} style={{position: 'absolute', top: 25, left: 120}}></Image>
        </View>
        <ScrollView>
          <View style = {styles.foodList}>
            {
              foods.map((item, index) => (
                <TouchableOpacity
                    key = {item.id}
                    onPress={goToDetail}>
                    <View style = {styles.food}>
                      <Image source={item.src}></Image>
                      <Text style={{paddingLeft: 10,paddingTop: 10, fontSize: 16, color: '#000'}}>{item.name}</Text>
                      <Text style={{paddingLeft: 10, paddingTop: 10}}>{item.cost}</Text>
                    </View>
                </TouchableOpacity>
              ))
            }
          </View>
        </ScrollView>
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
     marginTop: 30,
     borderRadius: 15,
     backgroundColor: '#fff'
   },
   btnGroup: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     marginTop: 60,
     paddingLeft: 20,
     paddingRight: 20
   },
   btnActive: {
     backgroundColor: '#B620E0',
     paddingLeft: 30,
     paddingRight: 30,
     paddingTop: 10,
     paddingBottom: 10,
     borderRadius: 5
   },
   btn: {
     backgroundColor: '#fff',
     paddingLeft: 30,
     paddingRight: 30,
     paddingTop: 10,
     paddingBottom: 10,
     borderRadius: 5
   },
   foodList: {
     flexDirection: 'row',
     flexWrap: 'wrap',
     justifyContent: 'space-between',
     paddingRight: 20,
     paddingLeft: 20,
     marginTop: 20
   },
   food: {
     backgroundColor: '#fff',
     height: 200,
     marginTop: 20,
     borderRadius: 20
   }
});
export default Cafe