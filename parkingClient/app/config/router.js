import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
//  import {icon} from 'react-native-elements';

import Login from '../components/Login';
import RegForm from '../components/RegForm';
import Home from '../components/Home';

export const Tabs = TabNavigator({

    Login:{
        screen: Login,
    },
    RegForm:{
        screen: RegForm,
    },
});
/*
export const stack = StackNavigator({
    Login:{
        screen: Login,
    },
    Home:{
        screen: Home,
    }
})

*/