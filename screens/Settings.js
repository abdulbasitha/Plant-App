/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    Alert
} from "react-native";
import { Block, Button, Text, Input, Card, Badge, Divider, Switch } from '../components';
import { theme } from "../constants";
import * as mocks from '../constants/mocks';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Slider from 'react-native-slider'
import navigation from "../navigation";
class Settings extends Component {
    state = {
        budget:50,
        monthly_cap:4000,
        notifications:true,
        newsletter:false,
        editing:false,
        profile:{}
    }
    componentDidMount(){
        this.setState({profile:mocks.profile})
    }
    handleEdit(name,text){
        const {profile} = this.state;
        profile[name]=text
        this.setState({profile:profile})
    }
    toggleEdit(name){
        const {editing} = this.state
        this.setState({editing:!editing ? name : null})
    }
    renderEdit(name){
        const {profile, editing} = this.state;
        if(editing === name){
            return(
                <TextInput
                defaultValue={profile[name]}
                onChangeText={(text)=>this.handleEdit([name],text)}
                />
            )
        }
        return( <Text bold>{profile[name]}</Text>)
    }
    render() {
        const {profile,editing} = this.state;
        return (
            <Block style={styles.container} color={theme.colors.white}>
                <Block flex={false} row center style={styles.header}>
                    <Block space="between" row >
                        <Text h1 bold>Settings</Text>
                        <TouchableOpacity
                            activeOpacity={0.5}>
                            <Image
                                source={require('../assets/images/avatar.png')}
                                style={styles.avatar}
                            />
                        </TouchableOpacity>
                    </Block>
                </Block>

                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <Block style={styles.inputs}>
                        <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                            <Block>
                                <Text gray2 style={{marginBottom:10}}>Username</Text>
                                {this.renderEdit('username')}
                            </Block>
                                <Text medium secondary onPress={()=>this.toggleEdit('username')}>
                                {editing =='username' ? 'Save':'Edit'}
                                </Text>
                        </Block>
                        <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                            <Block>
                                <Text gray2 style={{marginBottom:10}}>Location</Text>
                                {this.renderEdit('location')}
                            </Block>
                            <Text medium secondary onPress={()=>this.toggleEdit('location')}>
                                {editing =='location' ? 'Save':'Edit'}
                                </Text>
                        </Block>
                        <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                            <Block>
                                <Text gray2 style={{marginBottom:10}}>Email</Text>
                                    <Text bold>{this.state.profile.email}</Text>
                            </Block>

                        </Block>
                    </Block>

                    <Divider margin={[theme.sizes.base ,theme.sizes.base * 2]}/>

                    <Block style={styles.slider}>
                        <Block margin={[10,0]}>

                            <Text gray2 style={{marginBottom:10}}>Budget</Text>
                            <Slider
                            step={1}
                            minimumValue={0}
                            maximumValue={100}
                            style={{height:19}}
                            thumbStyle={styles.thumb}
                            trackStyle={{height:6,borderRadius:6}}
                            minimumTrackTintColor={theme.colors.secondary}
                            maximumTrackTintColor={"rgba(157,163,180,0.10)"}
                            value={this.state.budget}
                            onValueChange={(value)=>this.setState({budget:value})}
                            />
                            <Text cation gray right> ${this.state.budget}</Text>
                        </Block>
                        <Block margin={[10,0]}>
                            <Text gray2 style={{marginBottom:10}}>Monthly Cap</Text>
                            <Slider
                            step={1}
                            minimumValue={0}
                            maximumValue={10000}
                            style={{height:19}}
                            thumbStyle={styles.thumb}
                            trackStyle={{height:6,borderRadius:6}}
                            minimumTrackTintColor={theme.colors.secondary}
                            maximumTrackTintColor={"rgba(157,163,180,0.10)"}
                            value={this.state.monthly_cap}
                            onValueChange={(value)=>this.setState({monthly_cap:value})}
                            />
                            <Text cation gray right> ${this.state.monthly_cap}</Text>
                        </Block>
                    </Block>
                    <Divider />
                    <Block style={styles.toggles}>
                        <Block row space="between" style={{marginBottom:theme.sizes.base * 2}}>
                            <Text gray2>Notification</Text>
                            <Switch
                                value={this.state.notifications}
                                onValueChange={(value) => this.setState({ notifications: value })}
                            />
                        </Block>
                        <Block row space="between" style={{marginBottom:theme.sizes.base * 2}}>
                            <Text  gray2>Newsletter</Text>
                            <Switch
                                value={this.state.newsletter}
                                onValueChange={(value) => this.setState({ newsletter: value})}
                            />
                        </Block>

                    </Block>

                </ScrollView>
            </Block>
        );
    }
}
export default Settings;

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base * 2
    },
    avatar: {
        width: theme.sizes.base * 2,
        height: theme.sizes.base * 2
    },
    inputRow: {
        alignItems:'flex-end'
    },
    inputs: {
        marginTop:theme.sizes.base ,
        marginHorizontal: theme.sizes.base * 2
    },
    slider:{
        marginTop:theme.sizes.base ,
        marginHorizontal: theme.sizes.base * 2
    },
    thumb:{
        width:theme.sizes.base,
        height:theme.sizes.base,
        borderRadius:theme.sizes.base,
        borderColor:"white",
        borderWidth:3,
        backgroundColor:theme.colors.secondary
        // backgroundColor:"rgba(157,163,180,0.10)",        // border-radius: 6px;
    },
    toggles:{
        // marginTop:theme.sizes.base ,
        marginHorizontal: theme.sizes.base * 2
    }
});


