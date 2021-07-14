import React, { useState } from 'react'
import { SafeAreaView, View, Alert, TextInput } from 'react-native'
import { Button, Card, withTheme } from 'react-native-paper'
import { loginStyle } from './LoginStyle'
import { BACKEND } from '../../constants'


function LoginScreen({navigation}){

     const [email, setEmail] = useState(null)
     const [senha, setSenha] = useState(null)
     const [logando, setLogando] = useState(null)

    async function Logar() {

        setLogando(true)
        let url = `${BACKEND}/login`
        await fetch(url, {
            mode: 'cors',
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, senha})
        }).then(response => response.json())
            .then(data => {
                
                Alert.alert('Logando...','Login efetuado com sucesso!')

                if(data.nivel === 999){
                    setEmail('')
                    setSenha('')
                    navigation.navigate('UserAdminScreen')
                }else {
                    setEmail('')
                    setSenha('')
                    navigation.navigate('UserComumScreen', {data: data})
                }
            })
            .catch(function (error) {
                Alert.alert('Não foi possível efetuar o login')
                //console.error('Houve um problema ao salvar o registro: ' + error.message);
            })
            setLogando(false)
    }


    return (

        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.View}>
                <Card>
                    <Card.Title title="Projeto PSEL" titleStyle={loginStyle.CardTitle}></Card.Title>
                    <Card.Content>
                        <TextInput 
                            placeholder="Insira seu E-mail ou CPF"
                            nome="email"
                            onChangeText={(value) => setEmail(value)}
                            style={loginStyle.cardInput}>
                        </TextInput>
                        <TextInput 
                            placeholder="Senha"
                            nome="senha"
                            secureTextEntry={true}
                            onChangeText={(value) => setSenha(value)}
                            style={loginStyle.cardInput}>
                        </TextInput>
                        <Button
                            onPress={Logar} 
                            mode="contained"
                            loading={logando} 
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
                                    nivel: ''
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