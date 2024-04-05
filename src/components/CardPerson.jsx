import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import DeleteClient from './DeleteClient'
import EditClient from './EditCLient'

const CardPerson = ({icon, nombre, apellido, telefono, correo, empresa, id}) => {
  return (
    <View style={styles.card}>
      <Image source={icon} style={styles.icon}/>
      <View style={styles.info}>
        <Text style={styles.llaves}>Nombre: <Text style={styles.llavesInfo}>{nombre}</Text></Text>
        <Text style={styles.llaves}>Apellido: <Text style={styles.llavesInfo}>{apellido}</Text></Text>
        <Text style={styles.llaves}>Telefono: <Text style={styles.llavesInfo}>{telefono}</Text></Text>
        <Text style={styles.llaves}>Direccion: <Text style={styles.llavesInfo}>{correo}</Text></Text>
        <Text style={styles.llaves}>Empresa: <Text style={styles.llavesInfo}>{empresa}</Text></Text>
      </View>
      <View style={styles.opciones}>
        <EditClient />
        <DeleteClient 
          nombre={nombre}
          id={id}
        />
      </View>
    </View>
  )
}

export default CardPerson

const styles = StyleSheet.create({
    card: {
        borderColor: 'black',
        borderWidth: 2,
        width: '80%',
        height: 130,
        borderRadius: 20,
        marginBottom: 10,
        flexDirection: 'row'
    },
    icon: {
        position: 'absolute',
        width: 90,
        height: 90,
        opacity: 0.1,
        marginTop: 10,
    },
    info: {
      marginLeft: 12,
      marginRight: 25
      
    },
    llaves: {
      fontWeight: 'bold',
    },
    llavesInfo: {
      fontWeight: '400',
      lineHeight: 24
    },
    opciones: {
      // borderBlockColor: 'black',
      // borderWidth: 4,
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 25, 
      position: 'absolute',
      right: 15,
      top: 15
    }
})