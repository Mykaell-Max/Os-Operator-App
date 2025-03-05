import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Alert, TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../src/context/authContext'; 
import { loginUser } from '../../src/api/auth';
import { StyleSheet } from 'react-native';

export default function Login() {
  const { login, isLoggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  
  useEffect(() => {
    if (isLoggedIn) {
        router.replace('/(main)/');
    }
  }, [isLoggedIn]);
  
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha os campos corretamente.');
      return;
    }
    // setLoading(true);
    // try {
    //   const { token, userId } = await loginUser(email, password);
    //   login(token, userId);
    //   Alert.alert('Sucesso', 'Login feito com sucesso!');
    // } catch (error) {
    //   console.error('Erro ao fazer login:', error);
    //   Alert.alert('Erro', 'Credenciais incorretas. Tente novamente.');
    // } finally {
    //   setLoading(false);
    // }

    router.replace('/(main)/service-orders')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Service Order App</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      height: 50,
      borderColor: '#ddd',
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    loginButton: {
      backgroundColor: '#007bff',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
    },
    loginButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
});

