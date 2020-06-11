/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import Navigation from './navigation';
import {Block} from './components';
// import * as constants from './constants';

import {
  StyleSheet
} from "react-native";


class PlanetApp extends Component {
  state = {
    isLoadingComplete:false
  }
  // handleResourceAsync = async ()=>{
  //   const cacheImages = Image.map(img =>{
  //     return Asset.fromModule(image).downloadAsync();
  //   });
  // }
  render() {
    return (
      <Block >
       <Navigation />
      </Block>
    );
  }
}
export default PlanetApp;

const styles = StyleSheet.create({

});