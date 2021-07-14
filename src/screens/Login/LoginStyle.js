import { StyleSheet } from "react-native";
import { Dark } from '../../themes/Themes'
import { COLORS } from "../../constants";

export const loginStyle = StyleSheet.create({
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: Dark.colors.surface
    },
    View: {
        width: "80%",
    },
    CardTitle : {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        color: Dark.colors.primary
    },
    cardButton: {
        margin: 2,
        marginLeft: 0,
        marginRight:0
    },
    cardInput : {
        backgroundColor: Dark.colors.background,
        marginBottom: 15,
        color: COLORS.lightGray,
        borderRadius: 7,
        padding: 15,
    }
})