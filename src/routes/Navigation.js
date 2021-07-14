import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppContext } from '../themes/ThemeProvider'

import LoginScreen from '../screens/Login/LoginScreen'
import CadastroScreen from '../screens/Cadastro/CadastroScreen'
import HomeScreen from '../screens/Home/HomeScreen'
import UserAdminScreen from '../screens/UserAdmin/UserAdminScreen'
import UserComumScreen from '../screens/UserComum/UserComumScreen'
import AdmChangeUser from '../screens/UserAdmin/AdmChangeUser'

const Stack = createStackNavigator()

export default function Navigation(){
    const { tema } = React.useContext(AppContext)
    return(
        <NavigationContainer theme={tema}>
            <Stack.Navigator initialRouteName="Tela de Login">
                <Stack.Screen 
                    name="LoginScreen" 
                    component={LoginScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="CadastroScreen" 
                    component={CadastroScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="HomeScreen" 
                    component={HomeScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="UserAdminScreen" 
                    component={UserAdminScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="UserComumScreen" 
                    component={UserComumScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="AdmChangeUser" 
                    component={AdmChangeUser}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}