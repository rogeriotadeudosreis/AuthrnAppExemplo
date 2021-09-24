import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, FlatList, Alert} from 'react-native';
import Footer from '../../components/footer';
import Header from '../../components/header';

import {useAuth} from '../../contexts/auth';
import {listarTags, deletar} from '../../services/tagService';

import {Elogio} from './Elogio';
import styles from './styles';

export default function Tags() {
  //OBTENDO OS DADOS DO USECONTEXT AUTH
  const {token, signOut} = useAuth();
  const [listagem, setListagem] = useState();

  function handleSignOut() {
    //MÉTODO PASSADO PELO USECONTEXT
    signOut();
  }

  async function handleListarTags() {
    try {
      //MÉTODO VEM DO TAGSERVICES
      setListagem(await listarTags());
      console.log('dentro dashboard' + listagem);
    } catch (error) {
      //FAÇA O TRATAMENTO DE ERROS, USANDO ALGUM COMPONENTE OU O PRÓPRIO ALERT
      alert(error);
    }
  }

  async function handleDeletar(idSelecao) {
    try {
      //MÉTODO VEM DO TAGSERVICES
      await deletar(idSelecao);
      //APAGANDO DA LISTA O ITEM
      setListagem((vetorVelho) =>
        vetorVelho.filter((elogio) => elogio.id !== idSelecao),
      );
      console.log('dentro dashboard' + listagem);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
    <Header/>
      <View style={{backgroundColor: '#2c3e50', flex: 1}}>
        <View style={styles.containerBotoes}>
          <Button
            title="Listar Tags"
            color="green"
            onPress={handleListarTags}
          />
          <Button title="Sair" color="#506d84" onPress={handleSignOut} />
        </View>

        {listagem && (
          <View>
            <Text style={styles.tituloListaElogios}>Listagem de Elogios</Text>
            <FlatList
              data={listagem}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => (
                <Elogio titulo={item} onPress={() => handleDeletar(item.id)} />
              )}
            />
          </View>
        )}
      </View>
      <Footer />
    </>
  );
}
