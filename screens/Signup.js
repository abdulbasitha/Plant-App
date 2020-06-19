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
const VALID_USERNAME = "aba";
const VALID_PASSWORD = "123"
class Signup extends Component {
    state = {
        email: VALID_EMAIL,
        username: VALID_USERNAME,
        password: VALID_PASSWORD,
        errors: [],
        loading: false
    }
    handleSignup= () => {
        const { navigation } = this.props;
        const { email, password,username } = this.state;
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
            if (username != VALID_USERNAME) {
                errors.push('username')
            }
            this.setState({ errors, loading: false })
            if (!errors.length)
                navigation.navigate("Browse")

        }, 2000)
    }
    render() {
        const { navigation } = this.props;
        const { loading, errors } = this.state;
        const hasErrors = key => errors.includes(key) ? styles.hasErrors : null
        return (
            <KeyboardAvoidingView style={styles.signup} behavior="height">
                <Block padding={[0, theme.sizes.base * 2]} style={{ backgroundColor: "white" }}>

                    <Block >
                        <Text h1 bold>Signup</Text>
                        <Block middle>
                            <Input
                                label="Email"
                                error={hasErrors('email')}
                                style={[styles.input, hasErrors('email')]}
                                defaultValue={this.state.email}
                                onChangeText={text => this.setState({ email: text })}
                            />
                             <Input
                                label="Username"
                                error={hasErrors('username')}
                                style={[styles.input, hasErrors('username')]}
                                defaultValue={this.state.username}
                                onChangeText={text => this.setState({ username: text })}
                            />
                            <Input
                                secure
                                error={hasErrors('password')}
                                label="Password"
                                style={[styles.input, hasErrors('password')]}
                                defaultValue={this.state.password}
                                onChangeText={text => this.setState({ password: text })}
                            />
                            <Button gradient onPress={() => this.handleSignup()}>
                                {loading ? <ActivityIndicator size="small" color="white" /> :
                                    <Text center white bold>Signup</Text>}
                            </Button>
                            <Button onPress={() => navigation.navigate('Login')}>
                                <Text gray caption center
                                    style={{ textDecorationLine: 'underline' }}
                                >
                                   Already have an account Login
                           </Text>
                            </Button>
                        </Block>
                    </Block>


                </Block>
            </KeyboardAvoidingView>



        );
    }
}
export default Signup;

const styles = StyleSheet.create({
    signup: {
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