/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import { Block, Button, Text } from '../components'
import {
    StyleSheet,
    FlatList
} from "react-native";
import { theme } from "../constants";

class Welcome extends Component {
    static navigationOptions = {
        header: null
    }
    renderIllustration = () => {
        const {illustrations} = this.props;
        return (
           <FlatList

           />

        )
    }
    renderSteps = () => {
        return (
            <Block>
                <Text>***</Text>
            </Block>
        )
    }
    render() {
        return (
            <Block style={{ backgroundColor: "white" }}>
                <Block center middle flex={0.5}>
                    <Text h1 bold center>Your home.
                    <Text h1 bold primary> Greener.</Text>
                    </Text>
                    <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>Enjoy the experience</Text>
                </Block>
                <Block center middle>
                    {this.renderIllustration()}
                    {this.renderSteps()}
                </Block>
                <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
                    <Button primary gradient onPress={() => alert("hi")}>
                        <Text center semibold white>Login</Text>
                    </Button>
                    <Button shadow onPress={() => alert("hi")}>
                        <Text center semibold >Signup</Text>
                    </Button>
                    <Button>
                        <Text center caption gray >Terms of services</Text>
                    </Button>
                </Block>
            </Block>
        );
    }
}

Welcome.defaultProps = {
    illustrations: [
        { id: 1, source: require('../assets/images/illustration_1.png') },
        { id: 2, source: require('../assets/images/illustration_2.png') },
        { id: 3, source: require('../assets/images/illustration_3.png') }
    ]
}
export default Welcome;

const styles = StyleSheet.create({

});