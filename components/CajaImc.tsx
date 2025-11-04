import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { VisorNivel } from './VisorNivel';
import { NIVELES } from '../helpers/Funciones';
import { Nivel } from '../model/Nivel';

type CajaImcProps = {
  idImcUsuario: number;
}

export default function CajaImc({ idImcUsuario }: CajaImcProps) {
  return (
    <FlatList
      data={NIVELES}
      renderItem={({ item }) => (
        <VisorNivel
          nivel={item}
          seleccionado={item.id === idImcUsuario}
        />
      )}
      keyExtractor={(nivel: Nivel) => nivel.id.toString()}
      contentContainerStyle={styles.contenedor}
    />
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});