import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Iconos
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import favicon from './assets/favicon.png'


// Screens ✨
import LoginView from './src/screens/LoginView';
import Home from './src/screens/Home';
import Inventarios from './src/screens/Inventarios';
import Contabilidad from './src/screens/Contabilidad';
import Personas from './src/screens/Personas';
import Pendiente from './src/screens/Pendiente';
import { Image, Text, TouchableOpacity } from 'react-native';

// Componentes para Header


const Favicon = ({ showText }) => {
  const redirect = useNavigation();  
  return (
    <TouchableOpacity 
      onPress={() => redirect.navigate("Home")} 
      style={{ flexDirection: 'row', alignItems: 'center' }}
    >
      <Image source={favicon} style={{ width: 28, height: 28, marginLeft: 10, marginRight: 10 }} />
      {showText && <Text style={{ fontSize: 20, fontWeight: '600' }}>DDNE Inventory</Text>}

      {/* <Text style={{ fontSize: 20, fontWeight: '600' }}>DDNE {showText && 'Inventory'}</Text> */}
    </TouchableOpacity>
  )
}
const Logout = () => {
  const redirect = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => redirect.navigate("Login")}
      style={{ flexDirection: 'row', alignItems: 'baseline', marginRight: 12 }}
    >
      <MaterialIcons name="logout" size={24} color="#D20062" />
    </TouchableOpacity>
  )
}


//🔸 Navegación Interna (TabBar)
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor: 'rgb(9, 167, 221)',
        // tabBarActiveBackgroundColor: '#048cba',
        tabBarInactiveBackgroundColor: '#048cba',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.8)'
      }}
    >

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          tabBarLabel: 'Inicio',
          headerTransparent: false,
          headerStyle: { backgroundColor: '#98c8f21c' },
          headerLeft: () => (
            <Favicon showText />
          ),
          headerRight: () => {
            return <Logout />
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }} />

      <Tab.Screen name="Inventarios" component={Inventarios}
        options={{
          title: 'Inventarios',
          tabBarLabel: 'Inventarios',
          headerTitleAlign: 'center',
          headerTransparent: false,
          headerStyle: { backgroundColor: '#98c8f21c' },
          headerLeft: () => (
            <Favicon showText={false} />
          ),
          headerRight: () => {
            return <Logout />
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="inventory" size={22} color={color} />
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
          headerStyle: { backgroundColor: '#98c8f21c' },
          headerLeft: () => (
            <Favicon showText={false} />
          ),
          headerRight: () => {
            return <Logout />
          },
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
          headerStyle: { backgroundColor: '#98c8f21c' },
          headerLeft: () => (
            <Favicon showText={false} />
          ),
          headerRight: () => {
            return <Logout />
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          )
        }}
      />

    </Tab.Navigator>
  );
};


//🔸  Navegación para Autenticación
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer
      initialRouteName='Login'
    >

      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{
            title: 'Inicio de Sesión',
            headerTintColor: '#023793',
            // headerTintColor: '#fff',
            // headerStyle: { backgroundColor: '#1A4055' },
            headerTitleAlign: 'center',
            // headerTransparent: true,
            headerShown: true,
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