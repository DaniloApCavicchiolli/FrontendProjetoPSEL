import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Button, Card, TextInput, withTheme } from 'react-native-paper'
import { loginStyle } from './LoginStyle'

function LoginScreen({theme}){
    const { colors } = theme
    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.View}>
                <Card>
                    <Card.Title title="Projeto PSEL" titleStyle={loginStyle.CardTitle}></Card.Title>
                    <Card.Content>
                        <TextInput label="Email" keyboardType="email-address"></TextInput>
                        <TextInput label="Password" secureTextEntry={true}></TextInput>
                        <Button uppercase={false} style={loginStyle.cardButton}>Esqueceu Login ou Senha?</Button>
                        <Button mode="contained" style={loginStyle.cardButton}>Login</Button>
                        <Button>Cadastrar</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )
}

export default withTheme(LoginScreen)