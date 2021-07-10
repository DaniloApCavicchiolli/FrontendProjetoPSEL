import React from 'react'
import { View, FlatList, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { withTheme, List, Text } from 'react-native-paper'
import Header from '../../components/Header'

function HomeScreen({ navigation, theme }) {
    const { colors } = theme
    const opcoes = [
        { id: 1, nome: 'UserComum', descricao: 'Perfil de Usuário', icone: 'blur', menu: 'UserComumScreen' },
        { id: 2, nome: 'UserAdmin', descricao: 'Lista de Usuários', icone: 'blur', menu: 'UserAdminScreen' }
    ]

    return (
        <>
            <Header titulo="HOME" back={false} />
            <View style={{ backgroundColor: colors.surface, paddingHorizontal: 10, paddingVertical: 20, flex: 1 }}>
                <List.Subheader> Selecione uma opção:</List.Subheader>
                <FlatList data={opcoes} renderItem={({ item }) => (
                    <View style={{
                        flex: 1, justifyContent: 'center', backgroundColor: colors.background,
                        borderRadius: 20, margin: 8
                    }}
                    >
                        <List.Item
                            title={item.nome}
                            description={item.descricao}
                            onPress={() => navigation.navigate(item.menu)}
                        />
                    </View>
                )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </>
    )
}

export default withTheme(HomeScreen)