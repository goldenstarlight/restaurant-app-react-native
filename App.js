/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './screens/Home'
import Welcome from './screens/Welcome'
import Scan from './screens/Scan'
import Cafe from './screens/Cafe'
import Detail from './screens/Detail'
import Add from './screens/Add'
import Payment from './screens/Payment'
import Order from './screens/Order'
import Complete from './screens/Complete'
import Rate from './screens/Rate'
import Chat from './screens/Chat'
import History from './screens/History'
import OrderDetail from './screens/OrderDetail'
import { Router, Scene } from 'react-native-router-flux'
import { StatusBar } from 'react-native'

StatusBar.setBackgroundColor('gray');
class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key = "root">
          <Scene key = "welcome" component = {Welcome} hideNavBar={true} title="welcome" initial = {true} />
          <Scene key = "home" component = {Home} title = "Home" hideNavBar={true} />
          <Scene key = "scan" component = {Scan} title = "Scan" hideNavBar={true} />
          <Scene key = "cafe" component = {Cafe} title = "Cafe" hideNavBar={true} />
          <Scene key = "detail" component = {Detail} title = "Detail" hideNavBar={true} />
          <Scene key = "payment" component = {Payment} title = "Payment" hideNavBar={true} />
          <Scene key = "add" component = {Add} title = "Add" hideNavBar={true} />
          <Scene key = "order" component = {Order} title = "Order" hideNavBar={true} />
          <Scene key = "complete" component = {Complete} title = "Complete" hideNavBar={true} />
          <Scene key = "rate" component = {Rate} title = "Rate" hideNavBar={true} />
          <Scene key = "chat" component = {Chat} title = "Chat" hideNavBar={true} />
          <Scene key = "history" component = {History} title = "History" hideNavBar={true} />
          <Scene key = "order_detail" component = {OrderDetail} title = "OrderDetail" hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}
export default App;
