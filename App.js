
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {NavigationContainer,} from '@react-navigation/native'
import Home from './src/screens/Home';
import Checkout from './src/screens/Checkout';

export default function App(props) {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Checkout" component={Checkout} options={{headerShown:false}}/>
  


    </Stack.Navigator>
  </NavigationContainer>
   
  );
}

