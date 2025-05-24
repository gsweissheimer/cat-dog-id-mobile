import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/contexts/AuthContext';
import { UserProvider } from './src/contexts/UserContext';
import { PetProvider } from './src/contexts/PetContext';
import { EventProvider } from './src/contexts/EventContext';

export default function App() {
  return (
    <AuthProvider>
      <EventProvider>
        <UserProvider>
          <PetProvider>
            <AppNavigator />
          </PetProvider>
        </UserProvider>
      </EventProvider>
    </AuthProvider>
  );
}