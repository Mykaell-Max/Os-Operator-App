import { useEffect } from 'react';
import { Redirect } from 'expo-router';
import { useAuth } from '../src/context/authContext';


export default function InitialScreen() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Redirect href="/(main)/service-orders" />;
}