import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import VisorNivel from './VisorNivel';
import { NIVELES } from '../helpers/Funciones';


interface Props {
  idImcUsuario: number;
}

export const CajaImc: React.FC<Props> = ({ idImcUsuario }) => {
  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      {NIVELES.map((nivel) => (
        <VisorNivel
          key={nivel.id}
          nivel={nivel}
          seleccionado={nivel.id === idImcUsuario}
        />
      ))}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'column',     
    alignItems: 'center',     
    justifyContent: 'center',    
    paddingVertical: 20,          
  },
});