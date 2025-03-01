import { StyleSheet } from "react-native";
import { ThemeType } from "../../../context/ThemeContext";

const style = (theme: ThemeType) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme?.background,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export {
    style,
}