/**
 * Tina React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './screens/Home';
import Questionnaire from './screens/Questionnaire';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      didFinish: false,
    }
  }

  componentDidMount(){
    setTimeout(() => {
      SplashScreen.hide();
      this.setState({didFinish: true});
    }, 2500)
  }

  render(){
    if (this.state.didFinish) {
      return(
        <Home />
      )
    }else{
      return null;
    }    
  }
}

export default App;
