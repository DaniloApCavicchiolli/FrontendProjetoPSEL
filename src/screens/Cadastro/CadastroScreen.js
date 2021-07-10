import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Appbar, Button, TextInput, withTheme } from 'react-native-paper'
import  Header  from '../../components/Header'
import { cadastroStyle } from './CadastroStyle'

function CadastroScreen({navigation}){
    return (
        <SafeAreaView>
            <ScrollView>
                <Header titulo="Cadastro" back={false}/>
                <View style={cadastroStyle.content}>
                    <TextInput label="Nome"  style={cadastroStyle.inputStyle}/>
                    <TextInput label="CPF"  style={cadastroStyle.inputStyle}/>
                    <TextInput 
                        label="Email" 
                        keyboardType="email-address"  
                        style={cadastroStyle.inputStyle}/>
                    <TextInput 
                        label="Senha" 
                        secureTextEntry={true} 
                        right={<TextInput.Icon 
                        name="eye-off-outline" />}
                        style={cadastroStyle.inputStyle}/>
                    <TextInput 
                        label="Confirmar Senha" 
                        secureTextEntry={true} 
                        right={<TextInput.Icon 
                        name="eye-off-outline" />}
                        style={cadastroStyle.inputStyle}/>
                    <Button
                        onPress={() => navigation.navigate('HomeScreen')} 
                        mode="contained" 
                        style={cadastroStyle.button}>
                        Cadastrar
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default withTheme(CadastroScreen)

