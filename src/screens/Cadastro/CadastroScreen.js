import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View, Text } from 'react-native'
import { Button, HelperText, TextInput, withTheme, Checkbox } from 'react-native-paper'
import  Header  from '../../components/Header'
import { cadastroStyle } from './CadastroStyle'
import { BACKEND } from '../../constants'

//import * as DocumentPiker from 'expo-document-piker'

function CadastroScreen({navigation, route }){

    //Obtendo os dados da alteração via rota
    const { data } = route.params

    const [nome, setNome] = useState(data.nome)
    const [cpf, setCpf] = useState(data.cpf)
    const [email, setEmail] = useState(data.email)
    const [senha, setSenha] = useState(data.senha)
    const [status, setStatus] = useState(data.status)

    const [salvandoRegistro, setSalvandoRegistro] = useState(false)
    const [erros, setErros] = useState({})
    const [aviso, setAviso] = useState('')

    const validaErrosRegistro = () => {
        const novosErros = {}
        //Validação dos campos
        if (!nome || nome === '') novosErros.nome = 'O nome não pode ser vazio!'
        if (!cpf || cpf === '') novosErros.cpf = 'O cpf não pode ser vazio!'
        if (!email || email === '') novosErros.email = 'O email não pode ser vazio!'
        if (!senha || senha === '') novosErros.senha = 'A senha não pode ser vazia!'
        return novosErros
      }

      async function salvaRegistro() {
        const novosErros = validaErrosRegistro()
        // Existe algum erro no array?
        if (Object.keys(novosErros).length > 0) {
          // Sim, temos erros!
          setErros(novosErros)
        } else {
          //Verificamos se o registro possui _id. Se não tiver, inserimos via POST(insert), senão alteramos via PUT(update)
          const metodo = data._id === null ? 'POST' : 'PUT'
          let statusRegistro = (status === true || status === 'ativo') ? 'ativo' : 'inativo'
          let registro = { nome: nome, 
                            status: statusRegistro, 
                            cpf: cpf, 
                            email: email, 
                            senha: senha, 
                            _id: data._id 
                        }
          setSalvandoRegistro(true)
          let url = `${BACKEND}/registros`
          await fetch(url, {
            mode: 'cors',
            method: metodo,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(registro)
          }).then(response => response.json())
            .then(data => {
              (data._id || data.message) ? setAviso('Registro salvo com sucesso!') : setAviso('')
              setNome('')
              setCpf('')
              setEmail('')
              setSenha('')
              Alert.alert('Registro salvo com sucesso!')
            })
            .catch(function (error) {
              setAviso(`Não foi possível salvar o registro: ${error.message}`)
              console.error('Houve um problema ao salvar o registro: ' + error.message);
            })
            setSalvandoRegistro(false)
        }
      }


    return (
        <SafeAreaView>
            <ScrollView>
                <Header titulo="Cadastro" back={true} navigation={navigation}/>
                <View style={cadastroStyle.content}>
                    <TextInput 
                        label="Nome"
                        name="nome"
                        value={nome}
                        onChangeText={setNome}
                        error={!!erros.nome}  
                        style={cadastroStyle.inputStyle}/>
                    <HelperText 
                        type="error"
                        visible={!!erros.nome}>
                        {erros.nome}
                    </HelperText>

                    <TextInput 
                        label="CPF"
                        name="cpf"
                        value={cpf}
                        onChangeText={setCpf}
                        error={!!erros.cpf}  
                        style={cadastroStyle.inputStyle}/>
                    <HelperText 
                        type="error"
                        visible={!!erros.cpf}>
                        {erros.cpf}
                    </HelperText>

                    <TextInput 
                        label="Email"
                        name="email"
                        value={email}
                        onChangeText={setEmail}
                        error={!!erros.email} 
                        keyboardType="email-address"  
                        style={cadastroStyle.inputStyle}/>
                    <HelperText 
                        type="error"
                        visible={!!erros.email}>
                        {erros.email}
                    </HelperText>

                    <TextInput 
                        label="Senha"
                        name="senha"
                        value={senha}
                        error={!!erros.senha}
                        onChangeText={setSenha}
                        secureTextEntry={true} 
                        style={cadastroStyle.inputStyle}/>
                    <HelperText 
                        type="error"
                        visible={!!erros.senha}>
                        {erros.senha}
                    </HelperText>

                    <View style={cadastroStyle.checkbox}>
                        <Checkbox
                            status={status ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setStatus(!status);
                                }}
                        />
                        <Text style={cadastroStyle.text}>Ativa?</Text>
                    </View>



                    <Button
                        disabled={erros.length > 0}
                        loading={salvandoRegistro}
                        onPress={() => salvaRegistro()} 
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

