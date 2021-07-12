import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Button, Card, TextInput, withTheme } from 'react-native-paper'
import { loginStyle } from './LoginStyle'

function LoginScreen({navigation}){

    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.View}>
                <Card>
                    <Card.Title title="Projeto PSEL" titleStyle={loginStyle.CardTitle}></Card.Title>
                    <Card.Content>
                        <TextInput 
                            label="Email" 
                            keyboardType="email-address" 
                            style={loginStyle.cardInput}>
                        </TextInput>
                        <TextInput 
                            label="Senha" 
                            secureTextEntry={true}
                            style={loginStyle.cardInput}>
                        </TextInput>
                        <Button 
                            uppercase={false} 
                            style={loginStyle.cardButton}>
                            Esqueceu Login ou Senha?
                        </Button>
                        <Button
                            onPress={() => navigation.navigate('HomeScreen')} 
                            mode="contained" 
                            style={loginStyle.cardButton}>
                            Login
                        </Button>
                        <Button
                            onPress={() => navigation.navigate('CadastroScreen', {
                                data: {
                                    _id: null,
                                    nome: '',
                                    status: true,
                                    cpf: '',
                                    email: '',
                                    senha: '',
                                }
                            })} 
                            style={loginStyle.cardButton}>
                            Cadastrar
                        </Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )
}

export default withTheme(LoginScreen)