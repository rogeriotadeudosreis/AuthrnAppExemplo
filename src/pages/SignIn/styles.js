import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerLogin: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50',
      padding: 50,
    },
    tituloLogin: {
      marginTop:30,
      color: '#FFF',
      fontSize: 20,
      fontWeight: 'bold',
    },
    inputLogin: {
      marginTop: 10,
      width: 300,
      backgroundColor: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 3,
      padding: 10,
    },
    forgot: {
      margin: 5,
      color: '#FFF',
    },
    botaoLogin: {
      width: 300,
      height: 42,
      backgroundColor: '#3498db',
      marginTop: 10,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textoLogin: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFF',
    },
    botaoCancelar: {
      width: 300,
      height: 42,
      backgroundColor: 'red',
      marginTop: 10,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textoLogin: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFF',
    },
    logo:{
     width:150,
     height: 150,
     borderRadius:50,
    }
  });

  export default styles;