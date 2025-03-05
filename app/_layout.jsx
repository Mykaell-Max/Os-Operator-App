import { Stack } from 'expo-router';
import { AuthProvider } from '../src/context/authContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)/login" />
        <Stack.Screen name="(main)/service-orders" />
      </Stack>
    </AuthProvider>
  );
}