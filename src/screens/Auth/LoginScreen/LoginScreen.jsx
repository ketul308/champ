import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import { style } from './style';
import { useTheme } from '../../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import i18n, { languages } from '../../../utils/i18n';
import { STRINGS } from '../../../utils/locales/strings';
import { AUTH_SCREENS } from '../../../navigation/AuthNavigator';
import { useAuth } from '../../../context/AuthContext';

const LoginScreen = () => {

    const { t } = useTranslation();
    const navigation = useNavigation();

    const { login } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const styles = style(theme);


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        login({ username, password })
    };

    return (
        <View style={styles.container}>
            <View style={styles.viewRowCenter}>
                <Button title='English' onPress={() => i18n.changeLanguage(languages.english)} />
                <Button title='Spanish' onPress={() => i18n.changeLanguage(languages.spanish)} />
            </View>

            <Text
                sharedTransitionTag='123'
                style={styles.title}
            >
                {t(STRINGS.welcome)}
            </Text>

            <Button title={"Theme"} onPress={() => toggleTheme()} />
            <Animated.View entering={FadeInDown.duration(1000)}>
                <TextInput
                    style={styles.input}
                    placeholder={t(STRINGS.username)}
                    placeholderTextColor="#aaa"
                    value={username}
                    onChangeText={setUsername}
                />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(200).duration(500)}>
                <TextInput
                    style={styles.input}
                    placeholder={t(STRINGS.password)}
                    placeholderTextColor="#aaa"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </Animated.View>

            <Animated.View entering={FadeInUp.delay(400).duration(500)}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>{t(STRINGS.login)}</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(400).duration(500)}>
                <TouchableOpacity onPress={() => navigation.navigate(AUTH_SCREENS.Signup)}>
                    <Text style={styles.buttonText2}>{t(STRINGS.signup)}</Text>
                </TouchableOpacity>
            </Animated.View>

        </View>
    );
};

export default LoginScreen;
