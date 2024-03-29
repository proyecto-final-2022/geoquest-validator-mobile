import Home from "./components/Home.js";
import QRScan from "./components/QRScan.js";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
        <Stack.Screen name="QRScan" component={QRScan} options={{ headerStyle: {backgroundColor: '#FFF9CA'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

