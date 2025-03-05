import { View, Text } from 'react-native';
import { useAuth } from '../src/context/authContext';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>T1</Text>
    </View>
  );
}