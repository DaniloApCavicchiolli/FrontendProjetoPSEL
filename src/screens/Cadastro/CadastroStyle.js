import { StyleSheet } from "react-native"
import { Dark } from "../../themes/Themes"

export const cadastroStyle = StyleSheet.create({
    content : {
        padding: 15,
        paddingTop: 0
    },
    button: {
        margin: 5,
        marginLeft: 0,
        marginRight: 0
    },
    buttonImg : {
        marginTop: 32, 
        padding: 8
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
       },
       textAvatar: {
        color: Dark.colors.text, 
        paddingTop: 8, 
        paddingLeft: 16 
       },
       progressStyle: {
           marginTop: 8,
           marginBottom: 8
       }
})