import React from 'react';
import { AuthProvider } from './src/contexts/AuthContext';
import { UserProvider } from './src/contexts/UserContext';
import { PetProvider } from './src/contexts/PetContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <PetProvider>
          <AppNavigator />
        </PetProvider>
      </UserProvider>
    </AuthProvider>
  );
}