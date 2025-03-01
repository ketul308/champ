import React from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer, } from '@react-navigation/native';

import { useAuth } from '../context/AuthContext';
import { Theme, useTheme } from '../context/ThemeContext';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';


const RootNavigator = () => {

    const { user } = useAuth();
    const { theme, } = useTheme();

    return (
        <NavigationContainer theme={theme.mode == Theme.DARK ? DarkTheme : DefaultTheme}>
            {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

export default RootNavigator;
