import React from 'react'
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'

const Home = () => {
   const goToWelcome = () => {
      Actions.welcome()
   }

   const goToScan = () => {
      Actions.scan()
   }

   const goToCafe = () => {
      Actions.cafe()
   }
   return (
      <View style={{height: '100%'}}>
         <Image source={require('../assets/top.png')} style={styles.topImg}></Image>
         <View style = {styles.container}>
            <View>
               <Text style={styles.title}>Hi, Gabriela!</Text>
               <Text style={styles.subTitle}>Where are you going next?</Text>
            </View>
            <View>
               <View style={styles.line1}></View>
               <View style={styles.line2}></View>
               <View style={styles.line3}></View>
               <Image source={require('../assets/icons/plus.png')} style={{marginTop: 50}}></Image>
            </View>
         </View>
         <View style={styles.searchBox}>
            <TextInput style={styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Search your restuarant"
               autoCapitalize = "none"/>
            <Image source={require('../assets/home/search-icon.png')} style={styles.searchIcon}></Image>
         </View>
         <TouchableOpacity onPress = {goToCafe}>
            <View style={styles.restaurant}>
               <View style={styles.restaurantHead}>
                  <Text style={styles.restaurantHeadTitle}>Popular Restuarants</Text>
                  <Text style={styles.restaurantAll}>See All</Text>
               </View>
               <ScrollView>
                  <View style={styles.restaurantBody}>
                     <View style={styles.restaurantBodyTxt}>
                        <Image source={require('../assets/home/pizza.png')}></Image>
                        <View style={{paddingLeft: 10}}>
                           <Text style={{color: '#000', fontSize: 20}}>Anna's Cafe</Text>
                           <Text style={{color: '#000', paddingTop:10}}>Bakery</Text>
                        </View>
                     </View>
                     <View style={styles.mark}>
                        <Image source={require('../assets/home/star.png')}></Image>
                        <Text>4.5</Text>
                     </View>
                  </View>
               </ScrollView>
            </View>
         </TouchableOpacity>
         <View style={styles.footer}>
            <Image source={require('../assets/home/footer.png')} style={styles.footerImg}></Image>
            <View style={styles.btnGroup}>
               <TouchableOpacity onPress = {goToWelcome}>
                  <Image source={require('../assets/home/home-btn.png')} ></Image>
               </TouchableOpacity>
               <TouchableOpacity onPress = {goToScan}>
                  <Image source={require('../assets/home/scan.png')} ></Image>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      top: 80,
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
      fontWeight: 'bold'
   },
   subTitle: {
      color: '#fff',
      paddingTop: 30,
      fontSize: 12
   },
   line1: {
      width: 15,
      height: 2,
      backgroundColor: '#fff'
   },
   line2: {
      width: 18,
      height: 2,
      backgroundColor: '#fff',
      marginTop: 5
   },
   line3: {
      width: 21,
      height: 2,
      backgroundColor: '#fff',
      marginTop: 5
   },
   searchBox: {
      marginTop: 30,
      paddingLeft: 40,
      paddingRight: 40
   }, 
   input: {
      backgroundColor: '#fff',
      paddingLeft: 30,
      borderRadius: 10
   },
   searchIcon: {
      position: 'absolute',
      top: 18,
      left: 48
   },
   restaurant: {
      marginTop: 40
   },
   restaurantHead: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 20,
      paddingRight: 20
   },
   restaurantHeadTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000'
   },
   restaurantAll: {
      fontWeight: 'bold',
      color: 'blue',
      paddingTop: 10
   },
   restaurantBody: {
      backgroundColor: '#fff',
      height: 110,
      borderRadius: 20,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 25,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10
   },
   restaurantBodyTxt: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   mark: {
      backgroundColor: '#F8F8F8',
      height: 20,
      width:38,
      borderRadius:5,
      flexDirection: 'row',
      justifyContent: 'space-around',
   },
   footerImg: {
      width: '100%',
   },

   footer: {
      position: 'absolute',
      bottom: 0,
      width: '100%'
   },

   btnGroup: {
      position: 'absolute',
      top: 20,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between'
   }

   
});
export default Home