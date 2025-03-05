import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ServiceOrderDetailsScreen() {
    const id = 4

    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Service Order Details</Text>
            <Text>Resubmit de uma OS de ID: {id}</Text>
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