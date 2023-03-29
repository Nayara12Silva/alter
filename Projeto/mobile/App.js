import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
   useFonts,
   Montserrat_400Regular,
   Montserrat_500Medium,
   Montserrat_600SemiBold,
   Montserrat_700Bold,
   Montserrat_800ExtraBold,
 } from '@expo-google-fonts/montserrat';
import { Rotas } from './src/Routers';

export default function App() {
const [FontLoading] = useFonts({
 "MontSerratRegular": Montserrat_400Regular,
 "MontSerratMedium": Montserrat_500Medium,
 "MontSerratSemiBold": Montserrat_600SemiBold,
 "MontSerratBold": Montserrat_700Bold,
 "MontSerratExtraBold": Montserrat_800ExtraBold,

});
if(!FontLoading){
  return <View/>
}
  return (
   <NavigationContainer>
    <StatusBar backgroundColor='black' barStyle={'light-content'}/>
      <Rotas/>
   </NavigationContainer>
  );
}
