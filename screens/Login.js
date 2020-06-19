/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import {
    StyleSheet,
    KeyboardAvoidingView,
    Keyboard,
    ActivityIndicator
} from "react-native";
import { Block, Button, Text, Input } from '../components';
import { theme } from "../constants";
const VALID_EMAIL = "a@b.com";
const VALID_PASSWORD = "123"
class Login extends Component {
    state = {
        email: VALID_EMAIL,
        password: VALID_PASSWORD,
        errors: [],
        loading: false
    }
    handleLogin = () => {
        const { navigation } = this.props;
        const { email, password } = this.state;
        const errors = [];
        Keyboard.dismiss()
        this.setState({ loading: true })

        // check
        setTimeout(() => {
            if (email != VALID_EMAIL) {
                errors.push('email')
            }
            if (password != VALID_PASSWORD) {
                errors.push('password')
            }
            this.setState({ errors, loading: false })
            if (!errors.length)
                navigation.navigate("Browse")

        }, 20)
    }
    render() {
        const { navigation } = this.props;
        const { loading, errors } = this.state;
        const hasErrors = key => errors.includes(key) ? styles.hasErrors : null
        return (
            <KeyboardAvoidingView style={styles.login} behavior="height">
                <Block padding={[0, theme.sizes.base * 2]} style={{ backgroundColor: "white" }}>

                    <Block >
                        <Text h1 bold>Login</Text>
                        <Block middle>
                            <Input
                                label="Email"
                                error={hasErrors('email')}
                                style={[styles.input, hasErrors('email')]}
                                defaultValue={this.state.email}
                                onChangeText={text => this.setState({ email: text })}
                            />
                            <Input
                                secure
                                error={hasErrors('password')}
                                label="Password"
                                style={[styles.input, hasErrors('password')]}
                                defaultValue={this.state.password}
                                onChangeText={text => this.setState({ password: text })}
                            />
                            <Button gradient onPress={() => this.handleLogin()}>
                                {loading ? <ActivityIndicator size="small" color="white" /> :
                                    <Text center white bold>Login</Text>}
                            </Button>
                            <Button onPress={() => navigation.navigate('Forgot')}>
                                <Text gray caption center
                                    style={{ textDecorationLine: 'underline' }}
                                >
                                    Forgot your password
                           </Text>
                            </Button>
                        </Block>
                    </Block>


                </Block>
            </KeyboardAvoidingView>



        );
    }
}
export default Login;

const styles = StyleSheet.create({
    login: {
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