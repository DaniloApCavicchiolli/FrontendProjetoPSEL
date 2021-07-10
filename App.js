import React from 'react'
import CadastroScreen from './src/screens/Cadastro/CadastroScreen'
import LoginScreen from './src/screens/Login/LoginScreen'
import ThemeProvider from './themes/ThemeProvider'



export default function App() {
  return (
    <ThemeProvider>
      <CadastroScreen />
    </ThemeProvider>
  )
}

