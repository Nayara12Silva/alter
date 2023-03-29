import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import Tema from './Style/tema'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//pages 
import App from './App'
import { Home } from './Pages/Home'
import { FormLogin } from './Pages/FormLogin'
import { FormCadastro } from './Pages/FormCadastro'
import { Erro } from './Components/Error/erro'
import { ListarProduto } from './Pages/produtosListar'
import { Nay } from './Pages/teste'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <FormLogin/>,
      },
      {
        path:"/cadastro",
        element:<FormCadastro/>
      },
      {
        path:"/erro",
        element:<Erro/>
      },
      {
        path:"/teste",
        element:<ListarProduto/>
      },
      {
        path:"/teste11",
        element:<Nay></Nay>
            }
    
    
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={Tema}>
    <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
