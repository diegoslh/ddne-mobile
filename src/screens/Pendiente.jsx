import React, { useEffect } from 'react'
import { StyleSheet, Text, View, BackHandler } from 'react-native'

const Pendiente = ({Opcion}) => {

useEffect(() => {
  const backAction = () => {
    console.log('El usuario ha presionado el botón de retroceso');
    Opcion(null)
    return true;
  }

  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction
  )

  return () => backHandler.remove();
})

  return (
    <View>
      <Text>Pendiente</Text>
    </View>
  )
}

export default Pendiente

// const styles = StyleSheet.create({})
