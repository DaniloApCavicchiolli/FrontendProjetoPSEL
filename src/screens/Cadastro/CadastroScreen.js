import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Appbar, Button, TextInput, withTheme } from 'react-native-paper'
import  Header  from '../../../components/Header'
import { cadastroStyle } from './CadastroStyle'

function CadastroScreen(){
    return (
        <SafeAreaView>
            <ScrollView>
                <Header titulo="Cadastro" back={false}/>
                <View style={cadastroStyle.content}>
                    <TextInput label="Nome" />
                    <TextInput label="CPF" />
                    <TextInput label="Email" keyboardType="email-address" />
                    <TextInput label="Senha" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" />}/>
                    <TextInput label="Confirmar Senha" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" />}/>
                    <Button mode="contained" style={cadastroStyle.button}>Cadastrar</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default withTheme(CadastroScreen)

