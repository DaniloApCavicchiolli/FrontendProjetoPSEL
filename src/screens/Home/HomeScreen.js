import React from 'react'
import { View, FlatList } from 'react-native'
import { withTheme, List} from 'react-native-paper'
import Header from '../../components/Header'
import { homeStyle } from './HomeStyle'

function HomeScreen({ navigation}) {

    const opcoes = [
        { id: 1, nome: 'UserComum', descricao: 'Perfil de Usuário', icone: 'blur', menu: 'UserComumScreen' },
        { id: 2, nome: 'UserAdmin', descricao: 'Lista de Usuários', icone: 'blur', menu: 'UserAdminScreen' }
    ]

    return (
        <>
            <Header titulo="HOME" back={false} />
            <View style={homeStyle.View}>
                <List.Subheader> Selecione uma opção:</List.Subheader>
                <FlatList data={opcoes} renderItem={({ item }) => (
                    <View style={homeStyle.ViewItem}>
                        <List.Item
                            title={item.nome}
                            description={item.descricao}
                            titleStyle={{fontSize: 20}}
                            descriptionStyle={{marginBottom: 5}}
                            onPress={() => navigation.navigate(item.menu)}
                            left={props => <List.Icon {...props} icon={item.icone} />}
                        />
                    </View>
                )}
                    keyExtractor={item => item.id.toString()}//diferenciar os elementos
                />
            </View>
        </>
    )
}

export default withTheme(HomeScreen)