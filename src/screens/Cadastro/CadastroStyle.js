import { StyleSheet } from "react-native"
import { Dark } from "../../themes/Themes"

export const cadastroStyle = StyleSheet.create({
    content : {
        padding: 15,
        paddingtop: 0
    },
    button: {
        margin: 15,
        marginLeft: 0,
        marginRight: 0
    },
    inputStyle: {
        backgroundColor: "transparent"
    },
    checkbox: {
        flexDirection: 'row',
        marginBottom: 32
      },
      text: {
          color: Dark.colors.text,
          marginTop: 10,
       }
})