import { StyleSheet } from "react-native";
import { scaleFont, scaleHeight, scaleWidth } from "../../../utils/scale";
import { ThemeType } from "../../../context/ThemeContext";

export const style = (theme: ThemeType) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.background,
    },
    viewRowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: scaleFont(28),
        fontWeight: 'bold',
        color: theme.text,
        marginBottom: scaleHeight(30),
    },
    input: {
        width: scaleWidth(300),
        height: scaleHeight(50),
        backgroundColor: '#333',
        color: theme.text,
        borderRadius: scaleWidth(10),
        paddingHorizontal: scaleWidth(15),
        marginVertical: scaleHeight(10),
    },
    button: {
        width: scaleWidth(300),
        height: scaleHeight(50),
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scaleWidth(10),
        marginTop: scaleHeight(20),
    },
    buttonText: {
        color: theme.text,
        fontSize: scaleFont(18),
        fontWeight: 'bold',
    },
    buttonText2: {
        color: theme.text,
        fontSize: scaleFont(18),
        marginTop: scaleFont(16),
        fontWeight: 'bold',
    },
});
