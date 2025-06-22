import React, { useEffect, useMemo } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { DarkTheme, DefaultTheme, NavigationContainer, } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import { Theme, useTheme } from '../context/ThemeContext';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

// COMPONENTS
import CustomStatusBar from '../components/common/CustomStatusBar';


const RootNavigator = () => {

    const { user } = useAuth();
    const { theme, } = useTheme();
    const style = useMemo(() => styles(theme), [theme.mode]);

    useEffect(() => {
        theme.background && SystemNavigationBar.setNavigationColor(theme.background);
    }, [theme.mode]);

    return (
        <NavigationContainer theme={theme.mode == Theme.DARK ? DarkTheme : DefaultTheme}>
            <CustomStatusBar theme={theme} />
            <SafeAreaView style={style.container}>
                {user ? <AppNavigator /> : <AuthNavigator />}
            </SafeAreaView>
        </NavigationContainer>
    );
};


const styles = (theme) => StyleSheet.create({
    container: {
        backgroundColor: theme.background,
        flex: 1,
    },
})

export default RootNavigator;
