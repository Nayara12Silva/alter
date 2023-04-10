import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Rotas } from './src/Routers';

// import { AppLoading} from 'expo'
// import {useFonts,Anton_400Regular} from '@expo-google-fonts/anton'

export default function App() {
  // const [fontsCarregada] = useFonts({
  //   Anton_400Regular,
  //  });

  //  if(!fontsCarregada){
  //    return <AppLoading/>
  //  }
  return (
   <NavigationContainer>
      <StatusBar backgroundColor='#fff9ef' barStyle={'dark-content'}/>
      <Rotas/>
   </NavigationContainer>
  );
}
