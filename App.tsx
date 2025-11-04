import { StatusBar } from 'expo-status-bar';
import { use, useState } from 'react';
import { Alert, Button, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Resultado } from './components/Resultado';


export default function App() {
  const [peso, setPeso] = useState("")
  const [altura, setAltura] = useState("")
  const [imc, setImc] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)

  function calcularImc():void {
    const pesoNum = parseFloat(peso)
    const alturaNum = parseFloat(altura)
    
    if (pesoNum <= 0 ||alturaNum <= 0 || isNaN(pesoNum) || isNaN(pesoNum)) {
      Alert.alert("ERROR", "Hay que ingresar valores de peso y altura positivos")
    } else {
      const resultado = pesoNum / Math.pow(alturaNum, 2)
      setImc(resultado)
      setModalVisible(true)
    }
  }
  function reset() {
    setPeso("")
    setAltura("")
    setImc(0)
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textoTitulo}>Calculadora de IMC</Text>
      <TextInput
        style={styles.cuadrosTexto}
        placeholder="Peso (kg)"
        value={peso}
        onChangeText={setPeso} 
      />
      <TextInput
        style={styles.cuadrosTexto}
        placeholder="Altura (ej: 1.70 (m))"
        value={altura}
        onChangeText={setAltura}
      />
      <Pressable
        style={({pressed}) => [
          styles.botonCalcular,
          pressed && styles.botonCalcuarPulsado
        ]}
        onPress={calcularImc}
      >
        <Text style={styles.textoBoton}>Calcular IMC</Text>
      </Pressable>
      {
        modalVisible && (
          <Modal
            animationType={"slide"}
            transparent={true}
          >
          <View style={{flex: 1}}>
            <Pressable
              style={styles.fondoModal}
              onPress={reset}
            />
            <Resultado imc={imc}/>
          </View>
          </Modal>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    alignItems: "center"
  }, 
  textoTitulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3333",
    marginBottom: 32
  },
  cuadrosTexto: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16
  },
  botonCalcular: {
    width: "100%",
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 10
  },
  botonCalcuarPulsado: {
    backgroundColor: "#005BBB"
  },
  textoBoton: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center"
  },
  fondoModal: {
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});
