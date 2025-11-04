import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Nivel } from '../model/Nivel'
type tipo={
    nivel:Nivel
    seleccionado:boolean
}
export default function VisorNivel({nivel,seleccionado}:tipo) {
  return (
    <View style={[seleccionado ? styles.contenedorDestacado : styles.contenedorSinDestacar, {backgroundColor:nivel.color}]}>
      <Text>{nivel.categoria} {nivel.extremoInferior}-{nivel.extremoSuperior}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    contenedorSinDestacar:{
        width:"85%",
        paddingVertical:7,
        paddingHorizontal:15,
        borderRadius:20,
        marginVertical:5
    },
    contenedorDestacado:{
        width:"85%",
        paddingVertical:7,
        paddingHorizontal:15,
        borderRadius:20,
        marginVertical:5,
        opacity:0.4,
        borderWidth:2,
        borderColor:"#00000040"
    },
    texto:{
        fontSize:14,
        color:"#1A1A1A"
    }
})