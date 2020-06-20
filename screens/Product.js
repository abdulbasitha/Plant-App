/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";
import * as mocks from '../constants/mocks';
import { Block, Button, Text, Input, Card, Badge,Divider } from '../components';
import { theme } from "../constants";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import navigation from "../navigation";
import Icon from 'react-native-vector-icons/Entypo';
const { width, height } = Dimensions.get('window');
class Product extends Component {
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
        const {product} = this.props;
       return( <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        data = {product.images}
        keyExtractor={(item,index)=>`${item}`}
        renderItem={({item})=>(
            <Image source={item}
            resizeMode="contain"
            style={{width:width,height:height/2.8}}
            />
        )}
        />)


    }
    render() {
        const {product} = this.props;
        return (
            <Block color="white">
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {this.renderGallery()}
                <Block style={styles.product} >
                    <Text h2 bold>{product.name}</Text>
                    <Block flex={false} row margin={[theme.sizes.base,0]}>
                    {product.tags.map(tag=>(
                       <Text  key={`tag-${tag}`} caption gary style={styles.tag}>
                           {tag}
                       </Text>
                    ))}
                    </Block>
                    <Text gary light height={22}>{product.description}</Text>
                    <Divider margin={[theme.sizes.padding * 0.9,0]}/>
                    <Block>
                        <Text semibold>Gallery</Text>
                        <Block row margin={[theme.sizes.base,0]}>
                        {product.images.slice(1,3).map( (image,index) =>(
                            <Image
                            key={`gallery-${index}`}
                            source={image}
                            style={styles.image}
                            />
                        ))}
                        <Block
                         card
                         center
                         middle
                         flex={false}
                         color="#C5CCD6"
                         style={styles.more}
                         >
                            <Text>+13</Text>
                        </Block>
                        </Block>
                    </Block>
                </Block>
            </ScrollView>
            </Block>
        );
    }
}
Product.defaultProps = {
    product : mocks.products[0]
}
export default Product;

const styles = StyleSheet.create({
    product:{
        paddingHorizontal:theme.sizes.base * 2,
        paddingVertical:theme.sizes.padding,
        backgroundColor:theme.colors.white
    },
    tag:{
        borderColor:theme.colors.gray,
        borderWidth:StyleSheet.hairlineWidth,
        borderRadius:theme.sizes.base * 1.2,
        borderRadius:theme.sizes.base,
        paddingHorizontal:theme.sizes.base,
        paddingVertical:theme.sizes.padding / 3,
        marginRight:theme.sizes.base * 0.625
    },
    image:{
        width:(width) /3.26,  // 375 / 115
        height:(width) /3.26,
        marginRight:theme.sizes.base
    },
    more:{
        width:55,
        height:55
    }
});