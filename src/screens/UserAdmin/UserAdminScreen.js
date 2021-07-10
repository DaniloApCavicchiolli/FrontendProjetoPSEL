import React from 'react'
import { View, FlatList, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { withTheme, List, Text } from 'react-native-paper'
import Header from '../../components/Header'

function UserAdminScreen({ navigation, theme }) {
    const { colors } = theme
    const opcoes = [
        { id: 1, nome: 'User01', status: 'Ativo', menu: 'User01' },
        { id: 2, nome: 'User02', status: 'Inativo', menu: 'User02' }
    ]

    return (
        <>
            <Header titulo="Área Administrativa" back={true} navigation={navigation} />
            <View style={{
                backgroundColor: colors.surface, paddingHorizontal: 8,
                paddingVertical: 8, flex: 1
            }}>
                <List.Subheader> Lista de Usuários:</List.Subheader>
                <FlatList data={opcoes} renderItem={({ item }) => (
                    <View style={{
                        flex: 1, justifyContent: 'center', backgroundColor: colors.background,
                        borderRadius: 20, margin: 8
                    }}
                    >
                        <List.Item
                            title={item.nome}
                            description={item.status}
                        />
                    </View>
                )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </>
    )
}

export default withTheme(UserAdminScreen)
