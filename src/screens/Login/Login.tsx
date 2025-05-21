import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuth } from '../../contexts/AuthContext';
import { RootStackParamList } from '../../navigation/AppNavigator';
import styles from './Login.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    if (!email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    } else if (email == 'gui@gui.com') {
        if(password == 'gui') {
          signIn(); 
          navigation.replace('Home');
        }
    } else {
      alert('Dados errados. Tente novamente.');
    }
  }

  return (
    <View style={styles.container}>
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
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
    </View>
  );
}
