import {createNativeStackNavigator} from '@react-navigation/native-stack'
// Paginas 
import { LoginScreen } from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

const Stack = createNativeStackNavigator();

 const Rotas =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='login'
            component={LoginScreen}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name='cadastro'
            component={RegisterScreen}
            options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}
export default Rotas;