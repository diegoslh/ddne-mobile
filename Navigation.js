import React from 'react';
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


// Screens ✨
import LoginView from './src/screens/LoginView';
import Home from './src/screens/Home';
import Inventarios from './src/screens/Inventarios';
import Contabilidad from './src/screens/Contabilidad';
import Personas from './src/screens/Personas';
import Pendiente from './src/screens/Pendiente';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#048cba'
      }}
    >

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Inicio',
          tabBarLabel: 'Inicio',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          headerTransparent: false,
          headerTintColor: '#fefefe',
          headerStyle: { backgroundColor: '#048cbad8' } 
      }} />

      <Tab.Screen name="Inventarios" component={Inventarios}
        options={{
          title: 'Inventarios',
          tabBarLabel: 'Inventarios',
          headerTitleAlign: 'center',
          headerTransparent: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="inventory" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen 
        name="Contabilidad" 
        component={Contabilidad}
        options={{
          title: 'Contabilidad',
          tabBarLabel: 'Contabilidad',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bookshelf" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen name="Personas" component={Personas}
        options={{
          title: 'Personas',
          tabBarLabel: 'Personas',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          )
        }}
      />

    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer
      initialRouteName='HomeTab'
    >

      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{
            title: 'Inicio de Sesión',
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerShown: true
          }}
        />

        <Stack.Screen
          name="HomeTab"
          component={Navigation}
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}


export default MyStack;

