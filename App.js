import {StatusBar} from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Login from "./screens/Login"

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  options={{headerShown:false}} name="Home" component={Home} />
                <Stack.Screen  options={{headerShown:false}} name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
