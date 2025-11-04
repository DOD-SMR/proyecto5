import React from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';
import { getNivel } from '../helpers/Funciones';
import CajaImc from './CajaImc';

type ResultadoProps = {
  imc: number;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

export default function Resultado({ imc, modalVisible, setModalVisible }: ResultadoProps) {
  const nivel = getNivel(imc);

  return (
    <>
      {modalVisible && (
        <Modal
          animationType="slide"
          transparent={true}
        >
          {/* Zona superior transparente - al pulsar se cierra el modal */}
          <Pressable
            onPress={() => setModalVisible(false)}
            style={styles.zonaSuperiorModal}
          />

          {/* Zona inferior - contiene el contenido */}
          <View style={styles.zonaInferiorModal}>
            <Text style={styles.textoCategoria}>
              {nivel.categoria} ({imc.toFixed(1)})
            </Text>

            <Text style={styles.textoConsejo}>
              {nivel.consejo}
            </Text>

            <CajaImc idImcUsuario={nivel.id} />
          </View>
        </Modal>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  zonaSuperiorModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  zonaInferiorModal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
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
    alignItems: 'center',
    maxHeight: '80%',
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