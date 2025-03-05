import { Stack } from 'expo-router';
import { AuthProvider, useAuth} from '../src/context/authContext';
import { Redirect } from 'expo-router';


function InitialScreen() {
    const { isLoggedIn } = useAuth();
    if (!isLoggedIn) {
      return <Redirect href="/(auth)/login" />;
    }
    return <Redirect href="/(main)/" />;
}


export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" component={InitialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}