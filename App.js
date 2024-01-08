
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { registerRootComponent } from "expo";
import { AppRegistry } from "react-native-web";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //In react native you use view instead of div because you're developing for a non-web application
    //Navigation container allows you to navigate between different screen (pages)
    //My current screen is named home and it uses code from the component HomeScreen
    //Stack.Navigator is used to define a stack of screens to navigate through
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
registerRootComponent(App)

