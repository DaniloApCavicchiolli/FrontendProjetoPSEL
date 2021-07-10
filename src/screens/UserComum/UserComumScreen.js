import React from 'react'
import { View, FlatList, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { withTheme, List, Text } from 'react-native-paper'
import Header from '../../components/Header'

function UserComumScreen({navigation}){
    return(
        <SafeAreaView>
            <ScrollView>
            <Header titulo="Perfil de Usuário" back={true} navigation={navigation}/>
            <View>
                <Text>Perfil do Usuário</Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default withTheme(UserComumScreen)