import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, Image } from 'react-native'
import { withTheme, Button,   TextInput,} from 'react-native-paper'
import { userComumStyle } from './UserComumStyle'

import Header from '../../components/Header'

function UserComumScreen({ navigation, route }) {

    const { data } = route.params

    const alteraRegistro = async (data) => {
        navigation.navigate('CadastroScreen', {
            data: data
        })
    }

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
                    value={data.nome}
                    mode='outlined'
                    disabled={true}
                    style={userComumStyle.input}
                />

                <TextInput 
                    label="CPF"
                    name="cpf"
                    value={data.cpf}
                    mode='outlined'
                    disabled={true}
                    style={userComumStyle.input}
                />

                <TextInput 
                    label="Email"
                    name="email"
                    value={data.email}
                    mode='outlined'
                    disabled={true}
                    keyboardType="email-address"  
                    style={userComumStyle.input}
                />
                
                </View>
                <View style={userComumStyle.containerBotao}>
                <Button 
                    icon="account-edit" 
                    mode="contained" 
                    onPress={() => alteraRegistro(data)} 
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