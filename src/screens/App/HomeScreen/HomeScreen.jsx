import React from 'react';
import { View, Text, Button } from 'react-native';

import { useAuth } from '../../../context/AuthContext';
import { useTheme } from '../../../context/ThemeContext';
import { style } from './styles';
import { useHomeScreen } from './useHomeScreen';


const HomeScreen = ({ navigation }) => {
    const { logout } = useAuth();
    const { theme, } = useTheme();
    const styles = style(theme);

    const {
        fetchUserProfile, loading, signIn, user,
    } = useHomeScreen();

    return (
        <View style={styles.container}>
            <Text>Welcome to Home Screen!</Text>
            <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
            <Button title="Logout" onPress={logout} />
        </View>
    );
};

export default HomeScreen;
