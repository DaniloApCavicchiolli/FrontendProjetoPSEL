import { StyleSheet } from "react-native";
import { Dark } from '../../themes/Themes'
import { COLORS, SIZES } from '../../constants'

export const listaRegistroStyle = StyleSheet.create({
    
    ViewItem : {
        flex: 1, 
        justifyContent: 'center', 
        backgroundColor: Dark.colors.background,
        borderRadius: SIZES.borderRadius, 
        margin: 8
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        height: 100,
        borderRadius: 8,
        marginBottom: 2,
        marginHorizontal: 8
    },
    botaoApagar: {
        backgroundColor: COLORS.branding,
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopEndRadius: SIZES.borderRadius,
        borderBottomEndRadius: SIZES.borderRadius
    },
    activityStyle: {
        color: Dark.colors.primary
    },
    avatarStyle: {
        backgroundColor: Dark.colors.background
    },
    textStyle: {
        color: Dark.colors.text
    }
})