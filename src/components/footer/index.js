import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Gral Imóveis - versão 1.0</Text>
    </View>
  );
}
