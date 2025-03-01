import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { screenOptions } from '../config/navigation';

import SignupScreen from '../screens/Auth/SignupScreen/SignupScreen';
import LoginScreen from '../screens/Auth/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

export const AUTH_SCREENS = {
    Login: "Login",
    Signup: "Signup",
}

const AuthNavigator = () => (
    <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={AUTH_SCREENS.Login} component={LoginScreen} />
        <Stack.Screen name={AUTH_SCREENS.Signup} component={SignupScreen} />
    </Stack.Navigator>
);

export default AuthNavigator;
