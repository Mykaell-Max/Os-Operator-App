import { Tabs } from 'expo-router';
import { Image, StatusBar } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// You'll need to create this colors file or import from your existing styles
const colors = {
  black: '#000000',
  white: '#FFFFFF',
  // Add other colors as needed
};

export default function TabsLayout() {
  return (
    <>
        <StatusBar barStyle="dark-content" />
s
        <Tabs
            screenOptions={{
            tabBarActiveTintColor: colors.black,
            tabBarInactiveTintColor: colors.black,
            headerStyle: {
                backgroundColor: colors.white
            },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            tabBarStyle: {
                backgroundColor: colors.white,
            },
            }}
        >   
            <Tabs.Screen 
            name="index" 
                options={{ 
                    title: 'Início',
                    tabBarIcon: ({ color, focused }) => (
                    <Ionicons 
                        name={focused ? 'list-sharp' : 'list-outline'} 
                        color={color} 
                        size={24} 
                    />
                    ),
            }}
            />

            <Tabs.Screen 
            name="listOs" 
                options={{ 
                    title: 'Minhas OS',
                    tabBarIcon: ({ color, focused }) => (
                    <Ionicons 
                        name={focused ? 'list-sharp' : 'list-outline'} 
                        color={color} 
                        size={24} 
                    />
                    ),
            }}
            />

            <Tabs.Screen 
            name="create" 
                options={{ 
                    title: 'Nova OS',
                    tabBarIcon: ({ color, focused }) => (
                    <Ionicons 
                        name={focused ? 'list-sharp' : 'list-outline'} 
                        color={color} 
                        size={24} 
                    />
                    ),
            }}
            />      

            <Tabs.Screen name="[id]" options={{ title: 'Login', href: null }} />
            <Tabs.Screen name="[id]-resubmit" options={{ title: 'Login', href: null }} />
        </Tabs>
    </>
  );
}