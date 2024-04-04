import React, { useEffect } from 'react'
import { StyleSheet, Text, View, BackHandler } from 'react-native'

import useHardwareBackHandler from '../hooks/useHardwareBackHandler'

const Pendiente = ({Opcion}) => {
  
  useHardwareBackHandler({ Opcion })

  return (
    <View>
      <Text>Pendiente</Text>
    </View>
  )
}

export default Pendiente

// const styles = StyleSheet.create({})
