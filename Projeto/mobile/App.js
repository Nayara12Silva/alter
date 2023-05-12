import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/Routers/index';


export default function App() {

  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor='#fff9ef' barStyle={'dark-content'}/>
        <Rotas/>
      </NavigationContainer>
    </>
  );
}
