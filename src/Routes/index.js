import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabRoutes from "./tab.routes";
import Login from "../screens/Login/Login";
import Home from "../screens/Home/Home";
import ManutencaoScreen from "../screens/Maintenance/Maintenance";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="App" component={TabRoutes} />
        <Stack.Screen name="Maintenance" component={ManutencaoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
