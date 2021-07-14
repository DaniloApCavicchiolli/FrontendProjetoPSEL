import React, { useEffect, useState } from 'react'
import { View, FlatList, SafeAreaView, Image, Alert, TouchableOpacity, Text, ScrollView } from 'react-native'
import { withTheme, List, Button,   TextInput,} from 'react-native-paper'
import { userComumStyle } from './UserComumStyle'

import Header from '../../components/Header'

function UserComumScreen({ navigation, route }) {

    const { data } = route.params

    const [nome, setNome] = useState(data.nome)
    const [cpf, setCpf] = useState(data.cpf)
    const [email, setEmail] = useState(data.email)
    const [senha, setSenha] = useState(data.senha)

    return (
        <SafeAreaView style={{flex: 1}}>
        <Header titulo="Cadastro" back={true} navigation={navigation}/>
        <View  style={userComumStyle.content}>
                <View style={userComumStyle.containerLogo}>
                    <Image
                         style={userComumStyle.imageUser}
                        source={require('../../../assets/user.png')}
                    />
                </View>
                <View style={userComumStyle.containerInput}>
                <TextInput 
                    label="Nome"
                    name="nome"
                    value={nome}
                    mode='outlined'
                    disabled={true}
                    style={userComumStyle.input}
                />

                <TextInput 
                    label="CPF"
                    name="cpf"
                    value={cpf}
                    mode='outlined'
                    disabled={true}
                    style={userComumStyle.input}
                />

                <TextInput 
                    label="Email"
                    name="email"
                    value={email}
                    mode='outlined'
                    disabled={true}
                    keyboardType="email-address"  
                    style={userComumStyle.input}
                />
                <TextInput 
                    label="Senha"
                    name="senha"
                    value={senha}
                    mode='outlined'
                    disabled={true}
                    secureTextEntry={true} 
                    style={userComumStyle.input}
                />
                </View>
                <View style={userComumStyle.containerBotao}>
                <Button 
                    icon="account-edit" 
                    mode="contained" 
                    onPress={() => {}} 
                    style={userComumStyle.buttonAlterar}>
                    Alterar
                </Button>

                <Button
                    icon="exit-to-app"
                    loading={false}
                    onPress={() => navigation.navigate('LoginScreen')} 
                    mode="contained" 
                    style={userComumStyle.buttonSair}>
                    Sair
                </Button>
                </View>
                </View>
    </SafeAreaView>
    
    )
}

export default withTheme(UserComumScreen)