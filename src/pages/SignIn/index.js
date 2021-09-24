import React, {useState} from 'react';
import {View, Button, StyleSheet, Text, TextInput} from 'react-native';
import {useAuth} from '../../contexts/auth';

//RESPONSÁVEL EM FAZER O LOGIN, TELA INICIAL

export function SignIn() {
  const [usuario, setUsuario] = useState({});
  const {signIn} = useAuth();

  function handleSign() {
    signIn(usuario);
  }

  return (
    <View style={styles.containerLogin}>
      <Text style={styles.tituloLogin}>E-mail</Text>
      <TextInput style={styles.inputLogin}
        value={usuario.email}
        onChangeText={(email) => setUsuario({...usuario, email})}
      />
      <Text>Senha</Text>
      <TextInput style={styles.inputLogin}
        value={usuario.password}
        onChangeText={(password) => setUsuario({...usuario, password})}
        />
        <Text>Esqueci minha senha</Text>
      <Button title="Sign In" color='#506D84' onPress={handleSign} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
