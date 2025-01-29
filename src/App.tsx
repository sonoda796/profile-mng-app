import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import theme from './theme/theme'
import { RouterMng } from './router/RouterMng'

function App() {

  return (
    <ChakraProvider theme={theme}>

      <BrowserRouter>

        <RouterMng />

      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
