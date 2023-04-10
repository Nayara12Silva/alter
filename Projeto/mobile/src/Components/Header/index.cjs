import React from 'react';
import {MaterialIcons}from '@expo/vector-icons'

export function header(){
   return(
        <View style={styles.container}>
            <MaterialIcons name='email'/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff9ef',
        alignItems: 'center',
  
      },
      icone:{
        backgroundColor: "#ff8702",
    },
    input:{
      fontWeight:"bold",
      color:"#fff"
    }
    });