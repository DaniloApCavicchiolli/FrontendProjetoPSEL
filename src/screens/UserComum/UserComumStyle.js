import { StyleSheet } from "react-native"
import { Dark } from "../../themes/Themes"

export const userComumStyle = StyleSheet.create({
    content : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Dark.colors.background
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        width: '90%',
    },
    imageUser: {
        flex: 1,
        alignSelf: 'center',
        width: "50%",
        height: "50%",
        borderRadius: 50,
        marginTop: 8
      },
    containerInput: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "90%",
    },
    input: {
        backgroundColor: Dark.colors.surface,
        width: '100%',
        height: 40,
        color: Dark.colors.text,
    },
    containerBotao: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "90%",
    },
    buttonAlterar: {
        margin: 10,
        width: "70%"
    },
    buttonSair: {
        margin: 10,
        width: "70%"
    }
})