import React from 'react';
import { View, Text, Image,StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Login(){
    const navegation = useNavigation();
    return(
        <View>
            <View>
                <Image source={require('../../../assets/imgs/teste1.png')} style={{width:'100%'}} resizeMode='contain'/>
            </View>
        </View>
    )
}