import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getNivel } from '../helpers/Funciones';
import { CajaImc } from './CajaImc';

interface Props {
  imc: number;
}

export const Resultado: React.FC<Props> = ({ imc }) => {
  const nivel = getNivel(imc);
  return (
    <View style={styles.contenedor}>
      <Text style={styles.textoCategoria}>
        {nivel.categoria} ({imc.toFixed(1)})
      </Text>

      <Text style={styles.textoConsejo}>
        {nivel.consejo}
      </Text>

      <CajaImc idImcUsuario={nivel.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textoCategoria: {
    fontSize: 24,
    fontWeight: '700',
    color: '#263e50',
    marginBottom: 12,
    textAlign: 'center',
  },
  textoConsejo: {
    fontSize: 16,
    color: '#34405e',
    textAlign: 'justify',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});