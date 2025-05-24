import React, { useState } from 'react';
import { ActivityIndicator, View, Text, TextInput, Pressable } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Login.styles';

export default function LoginScreen() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(false);
  

  async function handleLogin() {
    setLoginButtonDisabled(true);
    if (!email || !password) {
      alert('Por favor, preencha todos os campos.');
      setLoginButtonDisabled(false);
      return;
    }
    const logged = await signIn(email, password);
    if (!logged) {
      alert('Login ou senha inválidos');
      setLoginButtonDisabled(false);
      return;
    }
  }

  return (
    <View style={styles.container}>
      { loginButtonDisabled ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
          <Text style={styles.title}>Faça seu login</Text>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Pressable disabled={loginButtonDisabled} style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}
