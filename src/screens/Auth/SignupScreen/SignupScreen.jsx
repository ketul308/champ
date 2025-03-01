import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';

import { STRINGS } from '../../../utils/locales/strings';
import { useTheme } from '../../../context/ThemeContext';
import { style } from './style';
import { useAuth } from '../../../context/AuthContext';

const SignUpScreen = () => {

    const { t } = useTranslation();
    const { theme, } = useTheme();
    const styles = style(theme);

    const { login } = useAuth();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        login({ username, email, password })
    };

    return (
        <View style={styles.container}>
            <Text
                sharedTransitionTag='123'
                style={styles.title}
            >
                {t(STRINGS.welcome)}
            </Text>
            <Animated.View entering={FadeInDown.duration(500)}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#aaa"
                    value={username}
                    onChangeText={setUsername}
                />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(200).duration(500)}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#aaa"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(400).duration(500)}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#aaa"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </Animated.View>

            <Animated.View entering={FadeInUp.delay(600).duration(500)}>
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

export default SignUpScreen;