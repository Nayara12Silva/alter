import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../Pages/Home/index.cjs';
import { Login } from '../Pages/Login/index.cjs';
import {Cadastro} from '../Pages/Cadastro/index.cjs'
const Stack = createNativeStackNavigator();

export function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='home'
            component={Home}
            options={{headerShown:false}}
            />
              <Stack.Screen
            name='login'
            component={Login}
            // options={{headerShown:false}}

            />
              <Stack.Screen
            name='cadastro'
            component={Cadastro}
            options={{headerShown:false}}

            />
        </Stack.Navigator>
    )
}