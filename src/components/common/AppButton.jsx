import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ActivityIndicator, View  } from 'react-native';

export default function AppButton({ text, onPress, disabled, loading }) {
  return (
  <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={[styles.button, disabled && styles.disabled]}>
          {loading ? (
              <ActivityIndicator size="small" color={colors.yellow} />
          ) : (
              <Text style={styles.buttonText}>{text}</Text>
          )}
      </View>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white', 
    borderRadius: 50, 
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    alignItems: 'center', 
    justifyContent: 'center', 
    alignSelf: 'center', 
    elevation: 20,
    shadowColor: 'black', 
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    margin: 10,
    borderWidth: 0.5,
  },
  buttonText: {
    color: 'black', 
    fontSize: 18, 
  },
  disabled: {
    opacity: 0.5,
},
});