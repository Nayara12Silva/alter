import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Pages
import Welcome from '../Pages/Welcome/index.jsx';
import Home from '../Pages/Home/index.jsx'
import Cadastro from '../Pages/Cadastro/index.jsx';
import Login from '../Pages/Login/index.jsx';
const Stack = createNativeStackNavigator();

 function Rotas(){
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
            // options={{headerShown:false}}
            />
            <Stack.Screen
            name='login'
            component={Login}
            // options={{headerShown:false}}

            />
            <Stack.Screen
            name='cadastro'
            component={Cadastro}
            // options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}
export default Rotas