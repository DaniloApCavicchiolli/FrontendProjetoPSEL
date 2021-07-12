import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { List, withTheme, Avatar } from 'react-native-paper'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { BACKEND } from '../../constants'
import { listaRegistroStyle } from './ListaRegistroStyle'



function ListaRegistro({ data, navigation }){

    const [excluindo, setExcluindo] = useState(false)

    function botaoLadoDireito() {
        return (
            <View>
                <TouchableOpacity style={listaRegistroStyle.botaoApagar}
                    onPress={confirmaExclusaoRegistro}>
                    {excluindo
                        ? <ActivityIndicator size="small" color={listaRegistroStyle.activityStyle} />
                        : <Avatar.Icon size={24} icon="delete" style={listaRegistroStyle.avatarStyle } />
                    }
                    <Text style={listaRegistroStyle.textStyle}>Excluir</Text>
                </TouchableOpacity>
            </View>
        )
    }

    async function confirmaExclusaoRegistro() {
        setExcluindo(true)
        try {
            Alert.alert('Atenção!', 'Deseja mesmo excluir este registro?', [
                { text: 'Não', style: 'cancel' },
                {
                    text: 'Sim',
                    onPress: async () => {
                        await excluirRegistro(data)
                    },
                }
            ])
        } catch (response) {
            Alert.alert(response.data.error)
        }
        setExcluindo(false)
    }

    async function excluirRegistro(data) {
        let url = `${BACKEND}/registros/${data._id}`
        await fetch(url, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                Alert.alert('Aviso', data.message)
                navigation.goBack()
            })
            .catch(function (error) {
                console.error('Houve um problema ao excluir o registro: ' + error.message);
            })
    }

    const alteraRegistro = async (data) => {
        navigation.navigate('CadastroScreen', {
            data: data
        })
    }

    return (
        <>
            <Swipeable renderRightActions={botaoLadoDireito}>
                <TouchableOpacity styles={listaRegistroStyle.container}
                    onPress={() => alteraRegistro(data)}
                >
                    <View style={listaRegistroStyle.ViewItem}>
                        <List.Item
                            title={data.nome}
                            description={`status: ${data.status}`}
                            left={props => <List.Icon {...props} icon="image" />}
                        />
                    </View>
                </TouchableOpacity>
            </Swipeable>
        </>
    )
}

export default withTheme(ListaRegistro)