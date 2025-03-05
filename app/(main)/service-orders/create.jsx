import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CreateServiceOrderScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Create Service Order</Text>
      <Text>Tela create.jsx de service-orders</Text>
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