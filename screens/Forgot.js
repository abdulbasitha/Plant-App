/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import {
    StyleSheet,
    KeyboardAvoidingView,
    Alert,
    Keyboard,
    ActivityIndicator
} from "react-native";
import { Block, Button, Text, Input } from '../components';
import { theme } from "../constants";
const VALID_EMAIL = "a@b.com";
class Forgot extends Component {
    state = {
        email: VALID_EMAIL,
        errors: [],
        loading: false
    }
    handleForgot = () => {
        const { navigation } = this.props;
        const { email} = this.state;
        const errors = [];
        Keyboard.dismiss()
        this.setState({ loading: true })

        // check
        setTimeout(() => {
            if (email != VALID_EMAIL) {
                errors.push('email')
            }
            this.setState({ errors, loading: false })
            if (!errors.length)
                Alert.alert('Password sent!','Please check your email',[
                    {
                        text:"OK",
                        onPress:()=>navigation.navigate('Login')
                    }
                ],
                {cancelable:false}
                )

        }, 2000)
    }
    render() {
        const { navigation } = this.props;
        const { loading, errors } = this.state;
        const hasErrors = key => errors.includes(key) ? styles.hasErrors : null
        return (
            <KeyboardAvoidingView style={styles.forgot}>
            <Block padding={[0, theme.sizes.base * 2]} style={{ backgroundColor: "white" }}>
                <Text h1 bold>Forgot</Text>
                <Block middle>
                            <Input
                                label="Email"
                                error={hasErrors('email')}
                                style={[styles.input, hasErrors('email')]}
                                defaultValue={this.state.email}
                                onChangeText={text => this.setState({ email: text })}
                            />
                             <Button gradient onPress={() => this.handleForgot()}>
                                {loading ? <ActivityIndicator size="small" color="white" /> :
                                    <Text center white bold>Forgot</Text>}
                            </Button>
                            <Button onPress={() => navigation.navigate('Login')}>
                                <Text gray caption center
                                    style={{ textDecorationLine: 'underline' }}
                                >
                                    Back To Login
                           </Text>
                            </Button>
                            </Block>

            </Block>
            </KeyboardAvoidingView>
        );
    }
}
export default Forgot;

const styles = StyleSheet.create({
    forgot: {
        flex: 1,
        justifyContent: "center"
    },
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    hasErrors: {
        borderBottomColor: theme.colors.accent
    }
});