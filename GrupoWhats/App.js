import React from 'react';
// import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Rotas from './Src/Routers';


export default function App() {
  return (
    <NavigationContainer>
      <Rotas/>
    </NavigationContainer>
  )
}
