import React, { useState, useEffect, useCallback } from 'react'
import { View, FlatList, ActivityIndicator, Text, RefreshControl } from 'react-native'
import { withTheme, List, FAB } from 'react-native-paper'
import Header from '../../components/Header'
import { userAdminStyle } from './UserAdminStyle'
import { BACKEND } from '../../constants'
import ListaRegistro from '../ListaRegistro/ListaRegistro'

function UserAdminScreen({ navigation}) {
   
    const [registros, setRegistros] = useState([])
    const [carregandoRegistros, setCarregandoRegistros] = useState(false)
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        obterRegistros()
    }, [])//executar somente no load da interface

    async function obterRegistros() {
        setCarregandoRegistros(true)
        let url = `${BACKEND}/registros`
        await fetch(url)//tenta obter os dados
            .then(response => response.json())
            .then(data => {
                setRegistros(data)
                console.log('Registros obtidos com sucesso!')
            })
            .catch(function (error) {
                console.error(`Houve um problema ao obter os registros: ${error.message}`)
            })
        setCarregandoRegistros(false)
    }

    const onRefresh = useCallback(async () => {
        setRefreshing(true)
            try{
                await obterRegistros()
            } catch (error){
                console.error(error)
            }
        setRefreshing(false)
    },[refreshing])

    return (
        <>
            <Header titulo="Lista de Usuários" back={true} navigation={navigation}/>
            <View style={userAdminStyle.View}>
                <List.Subheader> Selecione uma opção:</List.Subheader>
                {carregandoRegistros && <ActivityIndicator size="large" color={userAdminStyle.activityStyle} />}
                {registros.length === 0 && !carregandoRegistros ? 
                    (
                        <View style={userAdminStyle.tituloAviso}>
                            <Text style={userAdminStyle.titulo}>Ainda não tem nenhum registro</Text>
                        </View>
                    ) : (
                        <FlatList data={registros} renderItem={({ item }) => (
                            <View style={userAdminStyle.ViewItem}>
                                <ListaRegistro data={item} navigation={navigation} />
                            </View>
                        )}
                            keyExtractor={item => item._id.toString()}//diferenciar os elementos
                            refreshControl={<RefreshControl 
                                                refreshing={refreshing}
                                                onRefresh={onRefresh} />
                                            }
                        />
                    )
                }
                <FAB
                    style={userAdminStyle.fab}
                    icon='plus'
                    label=''
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
                />
                
            </View>
        </>
    )
}

export default withTheme(UserAdminScreen)
