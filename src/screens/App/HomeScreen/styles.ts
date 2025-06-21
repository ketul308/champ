import { StyleSheet } from "react-native";
import { ThemeType } from "../../../context/ThemeContext";

const style = (theme: ThemeType) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme?.background,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 260,
        marginBottom: 20,
    },
})

export {
    style,
}