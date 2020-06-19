/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import {

    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import * as mocks from '../constants/mocks';
import { Block, Button, Text, Input, Card, Badge } from '../components';
import { theme } from "../constants";
import { ScrollView } from "react-native-gesture-handler";
import navigation from "../navigation";
class Browse extends Component {
    state = {
        active:'Products',
        categories:[]
    }
    componentDidMount(){

        this.setState({categories:mocks.categories})
    }
    handleTab = (tab) =>{
        console.log(tab)
        const categories = mocks.categories
        const filtered = categories.filter(
            category => category.tags.includes(tab.toLowerCase())
        )
        console.log(filtered)
        this.setState({active: tab , categories:filtered})
    }
    renderTabs = (tab)=>{
        const {active} = this.state;
        const isActive = tab === active;
        return(
            <TouchableOpacity
            key={`tab-${tab}`}
            onPress={()=>this.handleTab(tab)}
            style={[
                styles.tab,
                isActive ? styles.active :null

            ]}
            >
                <Text size={16} medium gray={!isActive} secondary={isActive}> {tab}</Text>
            </TouchableOpacity>
        );
    }
    render() {

        const {navigation} = this.props;
        const tabs = ['Products','Inspirations','Shop']
        const {categories} = this.state

        return (
         <Block style={{ backgroundColor: "white" }}>
            <Block flex={false} row center style={styles.header}>
               <Block space="between" row >
                   <Text h1 bold>Browse</Text>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('Settings')}
                    activeOpacity={0.5}
                    >
                    <Image
                    source={require('../assets/images/avatar.png')}
                    style={styles.avatar}
                    />
                    </TouchableOpacity>



                </Block>


            </Block>
            <Block flex={false} row style={styles.tabs}>
                {tabs.map(tabs=>this.renderTabs(tabs))}
            </Block>

            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{paddingVertical:theme.sizes.base * 2}}
            >
                  <Block flex={false}  row space="between" style={styles.categories}>
                {categories.map(category => (
                     <TouchableOpacity
                     activeOpacity={.8}
                     key={category.name}
                      onPress={()=>navigation.navigate('Explore')}>
                     <Card center middle shadow style={styles.category}>
                         <Badge margin={[0,0,15]} color={"#0AC4BA"}>
                         <Image source={category.image}/>
                         </Badge>
                         <Text medium height={20}>{category.name}</Text>
                         <Text gray caption> {category.count} products </Text>
                     </Card>

                     </TouchableOpacity>
                ))}
                 </Block>
            </ScrollView>

        </Block>
        );
    }
}
export default Browse;

const styles = StyleSheet.create({
   header:{
    paddingHorizontal:theme.sizes.base * 2
   },
   avatar:{
    width:theme.sizes.base * 2,
    height:theme.sizes.base * 2
   },
   tabs:{
    borderBottomColor:theme.colors.gray2,
    borderBottomWidth:StyleSheet.hairlineWidth,
    marginVertical:theme.sizes.base * 2,
    marginHorizontal:theme.sizes.base * 2,
   },
   tab:{
    marginRight:theme.sizes.base * 2,
    paddingBottom:theme.sizes.base,

   },


   active:{
       borderBottomColor:theme.colors.secondary,
       borderBottomWidth:3
   },
   category:{
    width:150,
    height:150
   },
   categories:{
       flexWrap:'wrap',
       paddingHorizontal:theme.sizes.base * 2,
       marginBottom:theme.sizes.base * 3.5
   }
});