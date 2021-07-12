import { StyleSheet } from "react-native";
import { Dark } from '../../themes/Themes'

export const userAdminStyle = StyleSheet.create({
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
    },
    activityStyle : {
        color: Dark.colors.background
    },
    tituloAviso: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    titulo: {
        fontSize: 20
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0
    }
})