/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image,
    ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as mocks from '../constants/mocks';
import { Block, Button, Text, Input, Card, Badge } from '../components';
import { theme } from "../constants";
// import { ScrollView, TextInput } from "react-native-gesture-handler";
import navigation from "../navigation";
import { color } from "react-native-reanimated";
import LinearGradient from "react-native-linear-gradient";
const { width, height } = Dimensions.get('window');

class Explore extends Component {
    renderSearch() {
        return (
            <Block middle flex={0.6} style={styles.search}>
                <Input
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor={theme.colors.gray}
                    rightStyle={styles.searchRight}
                    rightLabel={<Icon
                        name="search"
                        color={theme.colors.gray2}
                        sizes={theme.sizes.base / 1.6}
                        style={styles.searchIcon}
                    />}
                />
            </Block>
        )
    }
    renderImage(img, index) {
        const {navigation} = this.props;
        const sizes = Image.resolveAssetSource(img);
        const fullWidth = width - theme.sizes.padding * 2.5;
        const resize = (sizes.width * 100) / fullWidth;
        const imgWidth = resize > 75 ? fullWidth : sizes.width * 1.1;
        return (
            <TouchableOpacity
                key={`img-${index}`}
                onPress={() => navigation.navigate("Product")}
            >
                <Image
                    source={img}
                    style={[styles.images, { minWidth: imgWidth, maxWidth: imgWidth }]}
                />
            </TouchableOpacity>
        )
    }
    renderExplore() {
        const {navigation} = this.props;
        const images = mocks.explore
        const mainImage = images[0]

        return (
            <Block style={{ marginBottom: height / 2.5 }}>
                <TouchableOpacity
                    style={[styles.images, styles.mainImage]}
                    onPress={() => navigation.navigate('Product')}>
                    <Image source={mainImage} style={[styles.images, styles.mainImage]}
                    />
                </TouchableOpacity>
                <Block row space="between" wrap>
                    {
                        images.slice(1).map((img, index) => this.renderImage(img, index))
                    }
                </Block>
            </Block>
        )
    }
    renderFooter() {

        return (
            <LinearGradient style={styles.footer}
                locations={[1,1]}
                colors={['rgba(255,255,255,0)']}>
                <Button gradient style={{ width: width / 2.5 }}>
                    <Text bold white center>Filter</Text>
                </Button>
            </LinearGradient>


        )
    }
    render() {

        return (
            <Block color={theme.colors.white}>
                <Block flex={false} space="between" row center style={styles.header}>
                    <Text h1 bold>Explore</Text>
                    {this.renderSearch()}
                </Block>

                <ScrollView style={styles.explore}
                    // style={{paddingVertical:theme.sizes.base * 2}}
                    showsVerticalScrollIndicator={false}
                >

                    {this.renderExplore()}

                </ScrollView>

                {this.renderFooter()}
            </Block>
        );
    }
}
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        paddingHorizontal: theme.sizes.base * 2,
        paddingBottom:theme.sizes.base * 2
    },
    search: {
        height: theme.sizes.base * 2,
        width: width - theme.sizes.base * 2
    },
    searchInput: {
        fontSize: theme.sizes.caption,
        height: theme.sizes.base * 2,
        backgroundColor: "rgba(142, 142, 147, 0.06)",
        borderColor: "rgba(142, 142, 147, 0.06)",
        paddingLeft: theme.sizes.base / 1.333,
        paddingRight: theme.sizes.base * 1.5
    },
    searchRight: {
        top: 0,
        marginVertical: 0,
        backgroundColor: "transparent"
    },
    searchIcon: {
        position: "absolute",
        right: theme.sizes.base / 1.333,
        top: theme.sizes.base / 1.6
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        overflow: 'visible',
        alignItems: 'center',
        justifyContent: 'center',
        width,
        paddingBottom: theme.sizes.base * 4
    },
    explore: {
        marginHorizontal: theme.sizes.padding * 1.25
    },
    images: {
        minHeight: 100,
        maxHeight: 130,
        maxWidth: width - theme.sizes.padding * 2.5,
        marginBottom: theme.sizes.base,
        borderRadius: 4
    },
    mainImage: {
        minWidth: width - (theme.sizes.base * 2),
        maxHeight: width - (theme.sizes.base * 2)
    }

});