import React from 'react'
import Navigation from './src/routes/Navigation'
import ThemeProvider from './src/themes/ThemeProvider'
import UserComumScreen from './src/screens/UserComum/UserComumScreen'
import CadastroScreen from './src/screens/Cadastro/CadastroScreen'



export default function App() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  )
}

