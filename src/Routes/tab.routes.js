import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home/Home";
import Space from "../screens/Space/Space";
import Consult from "../screens/Consult/Consult";
import Profil from "../screens/Profile/Profile";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={"black"} size={size} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Espaço"
        component={Space}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="bold" color={"black"} size={size} />
          ),
          tabBarLabel: "Space",
        }}
      />
      <Tab.Screen
        name="Consult"
        component={Consult}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="book" color={"black"} size={size} />
          ),
          tabBarLabel: "Consult",
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={"black"} size={size} />
          ),
          tabBarLabel: "Profil",
        }}
      />
    </Tab.Navigator>
  );
}
