import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { Theme, ThemeType } from '../../context/ThemeContext'

type Props = {
    theme: ThemeType
}

const CustomStatusBar = (props: Props) => {
    const { theme } = props;
    const style = useMemo(() => styles(theme), [theme]);
    return (
        <View style={style.container}>
            <StatusBar
                barStyle={theme.mode == Theme.DARK ? 'light-content' : 'dark-content'}
                backgroundColor={theme.background}
                translucent={false}
            />
        </View>
    )
}

export default CustomStatusBar

const styles = (theme: ThemeType) => StyleSheet.create({
    container: {
        backgroundColor: theme.background,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})