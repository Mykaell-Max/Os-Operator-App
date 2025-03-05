import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';

export default function ServiceOrderDetailsScreen() {
    const router = useRouter();
    const id = 4

    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Service Order Details</Text>
            <Text>Detalhes de uma OS de ID: {id}</Text>
        
        <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/(main)/service-orders/[id]-resubmit')}
        >
            <Text style={styles.buttonText}>Go to resubmit os</Text>
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
});