import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import AboutScreen from './screen/AboutScreen';
import { Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
          headerStyle: {
            backgroundColor: "#6a51ae",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {fontWeight: "bold"},
          headerRight: () => (
            <Pressable onPress={() => alert("Menu Button pressed")}>
                <Text style = {{color: "#fff", fontSize: 16}}>Menu</Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: "#e8e4f"
          }


      }}>

          <Stack.Screen name = "Home" component={HomeScreen} options={{
            title: "Welcome Home",
            
          }}  />


          <Stack.Screen name = "About" component={AboutScreen} initialParams={{
            name: "Guest"
          }} 
          options={({route}) => ({
            title: route.params.name
          })}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}