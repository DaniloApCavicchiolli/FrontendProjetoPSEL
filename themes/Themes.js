import {DefaultTheme, DarkTheme} from 'react-native-paper'

export const Light = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: "#3f51b8",  
        accent: "#757de8", 
        background: "transparent",
        surface: "#F3F3F3", 
        text: "#232323",
    }
}

// export const Dark = {
//     ...DarkTheme,
//     dark: true,
//     colors: {
//         ...DarkTheme.colors,
//         primary: "#888",  
//         accent: "#002984", 
//         background: "transparent",
//         surface: "#232323", 
//         text: "#232323",
//         placeholder: "#888"
//     }
// }