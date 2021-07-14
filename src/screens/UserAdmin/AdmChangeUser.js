import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, Alert, Image } from 'react-native'
import { Button, HelperText, TextInput, withTheme, Checkbox, ProgressBar, Avatar } from 'react-native-paper'
import  Header  from '../../components/Header'
import { admChangeUserStyle } from './AdmChangeUserStyle'
import { BACKEND } from '../../constants'

function AdmChangeUser({navigation, route }){

    //Obtendo os dados da alteração via rota
    const { data } = route.params

    const [nome, setNome] = useState(data.nome)
    const [cpf, setCpf] = useState(data.cpf)
    const [email, setEmail] = useState(data.email)
    const [senha, setSenha] = useState(data.senha)
    const [status, setStatus] = useState(data.status)

    const [upload, setUpload] = useState(false)
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
          //Se o _id for nulo, faremos o POST(insert), senão faremos o PUT(update)
          const metodo = data._id === null ? 'POST' : 'PUT'
          let statusRegistro = (status === true || status === 'ativo') ? 'ativo' : 'inativo'
          let registro = { nome: nome, 
                            status: statusRegistro, 
                            cpf: cpf, 
                            email: email, 
                            senha: senha,
                            nivel: 1,
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
              (data._id || data.message) ? setAviso('Registro salvo com sucesso!') : setAviso('')//não tem nada
                setNome('')
                setCpf('')
                setEmail('')
                setSenha('')
                Alert.alert('Salvando...','Registro salvo com sucesso!')
            })
            .catch(function (error) {
              setAviso(`Não foi possível salvar o registro: ${error.message}`)// tem alguma coisa
              console.error('Houve um problema ao salvar o registro: ' + error.message);
            })
            setSalvandoRegistro(false)
        }
      }

    return (
        <SafeAreaView>
            <ScrollView>
                <Header titulo="Alterar usuário" back={true} navigation={navigation}/>
                <View style={admChangeUserStyle.content}>
                    <TextInput 
                        label="Nome"
                        name="nome"
                        value={nome}
                        onChangeText={setNome}
                        error={!!erros.nome}  
                        style={admChangeUserStyle.inputStyle}/>
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
                        style={admChangeUserStyle.inputStyle}/>
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
                        style={admChangeUserStyle.inputStyle}/>
                    <HelperText 
                        type="error"
                        visible={!!erros.email}>
                        {erros.email}
                    </HelperText>

                    <TextInput 
                        label="Senha"
                        name="senha"
                        value={senha}
                        onChangeText={setSenha}
                        error={!!erros.senha}
                        secureTextEntry={true} 
                        style={admChangeUserStyle.inputStyle}/>
                    <HelperText 
                        type="error"
                        visible={!!erros.senha}>
                        {erros.senha}
                    </HelperText>

                    <View style={admChangeUserStyle.checkbox}>
                        <Checkbox
                            status={status ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setStatus(!status);
                                }}
                        />
                        <Text style={admChangeUserStyle.text}>Ativa?</Text>
                    </View>
                    {upload && <ProgressBar indeterminate={true} style={admChangeUserStyle.progressStyle}/>}
                    
                    <Button 
                        icon="camera" 
                        mode="contained" 
                        onPress={() => {}} 
                        style={admChangeUserStyle.button}>
                        Selecionar Imagem
                    </Button>

                    <Button
                        disabled={erros.length > 0}
                        loading={salvandoRegistro}
                        onPress={() => salvaRegistro()} 
                        mode="contained" 
                        style={admChangeUserStyle.button}>
                        Cadastrar
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default withTheme(AdmChangeUser)

