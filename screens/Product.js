/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import {
    View,
    StyleSheet
} from "react-native";
import * as mocks from '../constants/mocks';
import { Block, Button, Text, Input, Card, Badge } from '../components';
import { theme } from "../constants";
import { ScrollView } from "react-native-gesture-handler";
import navigation from "../navigation";
import Icon from 'react-native-vector-icons/Entypo';
class Products extends Component {
    static navigationOptions = ({navigation}) =>{
        return {
            headerRight:(
                <Button onPress={()=>{}}>
                <Icon name="dots-three-horizontal" color={theme.colors.gray}/>
                </Button>
            )
        }
    }
    renderGallery(){
        const product = mocks.products;


    }
    render() {
        const product = mocks.products;
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {this.renderGallery()}
                <Block>
                    <Text>{product.name}</Text>
                </Block>
            </ScrollView>
        );
    }
}
export default Products;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});