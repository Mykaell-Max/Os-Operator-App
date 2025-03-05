import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ServiceOrdersScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <Text style={styles.screenTitle}>Service Orders</Text>
        <Text>Tela index.jsx de service-orders (tela principal)</Text>
        
        <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/(main)/service-orders/create')}
        >
            <Text style={styles.buttonText}>Go to Create OS</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/(main)/service-orders/listOs')}
        >
            <Text style={styles.buttonText}>Go to list OS</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});