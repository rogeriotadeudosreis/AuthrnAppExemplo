import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Footer from '../../components/footer';
import Header from '../../components/header';
import {useAuth} from '../../contexts/auth';
import styles from './styles';

//RESPONSÁVEL EM FAZER O LOGIN, TELA INICIAL

export function SignIn() {
  const [usuario, setUsuario] = useState({});
  const {signIn} = useAuth();
  const {singOut} = useAuth();

  function handleSign() {
    Keyboard.dismiss();
    signIn(usuario);
  }

  function handleSignOut() {
    singOut();
  }

  return (
    <>
      <Header />
      <View style={styles.containerLogin}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logoGral.jpeg')}
        />

        <Text style={styles.tituloLogin}>Login do Usuário</Text>
        <TextInput
          style={styles.inputLogin}
          placeholder="Digite seu E-mail..."
          value={usuario.email}
          onChangeText={(email) => setUsuario({...usuario, email})}
        />
        <TextInput
          style={styles.inputLogin}
          secureTextEntry={true}
          placeholder="Digite sua Senha..."
          value={usuario.password}
          onChangeText={(password) => setUsuario({...usuario, password})}
        />
        <TouchableOpacity style={styles.botaoLogin} onPress={handleSign}>
          <Text style={styles.textoLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoCancelar} onPress={handleSignOut}>
          <Text style={styles.textoLogin}>Cancelar</Text>
        </TouchableOpacity>
        <Text style={styles.forgot}>Esqueci minha senha</Text>
      </View>
      <Footer />
    </>
  );
}
