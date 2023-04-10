import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../Pages/Login/index.cjs';
import { Home } from '../Pages/Home/index.cjs';
import {Cadastro} from '../Pages/Cadastro/index.cjs'
import { Welcome} from '../Pages/Welcome/index.cjs';
import teste from '../Pages/Welcome/teste.cjs';
const Stack = createNativeStackNavigator();

export function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='welcome'
            component={Welcome}
            options={{headerShown:false}}
            />
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
              <Stack.Screen
            name='teste'
            component={teste}
            options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}