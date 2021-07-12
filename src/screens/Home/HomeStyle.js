import { StyleSheet } from "react-native";
import { Dark } from '../../themes/Themes'

export const homeStyle = StyleSheet.create({
    View : {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: Dark.colors.surface
    },
    ViewItem : {
        flex: 1, 
        justifyContent: 'center', 
        backgroundColor: Dark.colors.background,
        borderRadius: 20, 
        margin: 8
    }
})