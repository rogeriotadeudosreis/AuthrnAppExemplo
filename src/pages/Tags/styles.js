import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerElogios: {
    backgroundColor: '#bfe5df',
    marginHorizontal: 20,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
  },
  nomeElogio: {
    paddingLeft: 20,
    fontSize: 16,
  },
  tituloListaElogios: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  containerBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:20,
    
  },
});

export default styles;
