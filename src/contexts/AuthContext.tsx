import React, {
  createContext, useState, useEffect, useContext, ReactNode,
  useCallback
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postLogin } from '../services/api';

type AuthContextData = {
  userToken: string | null;
  loading:   boolean;
  signIn(email: string, pass: string): Promise<boolean>;
  signOut(): Promise<void>;
  getUserIdFromToken(): string;
};

const AuthContext = createContext<AuthContextData>({} as any);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userToken, setUserToken] = useState<string|null>(null);
  const [loading, setLoading]   = useState(true);

  
  function isTokenExpired(token: string) {
    try {
      const [, payload] = token.split('.');
      const json = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
      const { exp } = JSON.parse(json) as { exp: number };
      // exp vem em segundos desde epoch
      return Date.now() >= exp * 1000;
    } catch {
      return true; // se falhar o decode, trate como expirado
    }
  }

  const getUserIdFromToken = useCallback(() => {
      if (!userToken) return '';
      const payloadBase64 = userToken.split(".")[1];
      const payloadDecoded = JSON.parse(atob(payloadBase64));
      return payloadDecoded.id;
  }, [userToken]);

  useEffect(() => {
    (async () => {
      let token = null;
      try {
        token = await AsyncStorage.getItem('userToken');
        if (token && isTokenExpired(token)) {
          // token vencido: remova-o
          await AsyncStorage.removeItem('userToken');
          token = null;
        }
      } catch (e) {
        console.error('Erro ao validar token:', e);
        token = null;
      } finally {
        setUserToken(token);
        setLoading(false);
      }
    })();
  }, []);

  async function signIn(email: string, pass: string) {
    const { token } = await postLogin(email, pass);
    if (!token) {
      return false;
    } else {
      await AsyncStorage.setItem('userToken', token);
      setUserToken(token);
      return true;
    }
  }
  async function signOut() {
    await AsyncStorage.removeItem('userToken');
    setUserToken(null);
  }

  return (
    <AuthContext.Provider value={{ userToken, loading, signIn, signOut, getUserIdFromToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
