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
import { Router, Scene } from 'react-native-router-flux'
class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key = "root">
          <Scene key = "welcome" component = {Welcome} hideNavBar={true} title="welcome" initial = {true} />
          <Scene key = "home" component = {Home} title = "Home" hideNavBar={true} />
          <Scene key = "scan" component = {Scan} title = "Scan" hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}
export default App;
