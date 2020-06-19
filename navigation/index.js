import React from 'react';
import {Image} from 'react-native';
import {createAppContainer, ScrollView} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Forgot from '../screens/Forgot';
import Explore from '../screens/Explore';
import Browse from '../screens/Browse';
import Settings from '../screens/Settings';
import Product from '../screens/Product';


import {theme} from '../constants';

const screens = createStackNavigator({
Welcome,
Login:{
    screen:Login,
    navigationOptions:{
        title: false,
    }
},
Forgot:{
    screen:Forgot,
    navigationOptions:{
        title: false,
    }
},
Signup:{
    screen:Signup,
    navigationOptions:{
        title: false,
    }
},
Browse:{
    screen:Browse,
    navigationOptions:{
        title: false,
    }
},
Settings:{
    screen:Settings,
    navigationOptions:{
        title: false,
    }
},
Explore:{
    screen:Explore,
    navigationOptions:{
        title: false,
    }
},
Product:{
    screen:Product,
    navigationOptions:{
        title: false,
    }
},

},{
    defaultNavigationOptions:{
        headerStyle:{
            height:theme.sizes.base * 8,
            backgroundColor:theme.colors.white,
            borderBottomColor:"transparent",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        headerBackImage: <Image source={require('../assets/icons/back.png')}/>,
        headerBackTitle: () => null,
        headerLeftContainerStyle: {
            alignItems:'center',
            marginLeft:theme.sizes.base * 2,
            paddingRight:theme.sizes.base

        },
        headerRightContainerStyle:{
            alignItems:"center",
            paddingRight:theme.sizes.base
        },

    }
});

export default createAppContainer(screens);