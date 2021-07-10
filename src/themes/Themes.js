import {DefaultTheme, DarkTheme} from 'react-native-paper'

// export const Light = {
//     ...DefaultTheme,
//     dark: false,
//     colors: {
//         ...DefaultTheme.colors,
//         primary: "#3f51b8",  
//         accent: "#757de8", 
//         background: "#BDBDBD",
//         surface: "#F3F3F3", 
//         text: "#232323",
//     }
// }

export const Dark = {
    ...DarkTheme,
    dark: true,
    colors: {
        ...DarkTheme.colors,
        primary: "#1769aa",
        accent: "#002984",
        background: "#3c4557",
        surface: "#263238",
        text: "#FAFAFA"
    }
}