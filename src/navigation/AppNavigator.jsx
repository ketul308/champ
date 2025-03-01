import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { screenOptions } from '../config/navigation';

import HomeScreen from '../screens/App/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

export const APP_SCREENS = {
    Home: "Home",
}

const AppNavigator = () => (
    <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={APP_SCREENS.Home} component={HomeScreen} />
    </Stack.Navigator>
);

export default AppNavigator;
