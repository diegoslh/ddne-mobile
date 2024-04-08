import { StyleSheet, Text, View, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import useHardwareBackHandler from '../hooks/useHardwareBackHandler'
import CardPerson from './CardPerson'
import Clientimage from '../assets/img/client-azul.png'
import axios from 'axios'
import { URI } from '../../config'

const Proveedores = ({ Opcion }) => {

  useHardwareBackHandler({ Opcion })

  const [clientes, setClientes] = useState([]);

  const getClientes = () => {
    axios.get(`${URI}/proveedores`)
      .then(response => {
        setClientes(response.data.data);
      })
      .catch(error => {
        console.error('Error al traer la informacion:', error);
      });
  }

  useEffect(() => {
    getClientes()
  }, []);

  const reload = () => {
    getClientes()
  }

  return (
    <View style={styles.contenedor}>
      <View style={styles.container_title}>
        <Text style={styles.title_page}>Proveedores</Text>
      </View>

      {clientes.map(cliente => (
        <CardPerson
          key={cliente.persona_id}
          icon={Clientimage}
          nombre={`${cliente.nombre_1} ${cliente.nombre_2 ? cliente.nombre_2 : ''}`}
          apellido={`${cliente.apellido_1} ${cliente.apellido_2 ? cliente.apellido_2 : ''}`}
          telefono={cliente.telefono}
          correo={cliente.correo}
          empresa={cliente.nombre_empresa}
          direccion={cliente.direccion}
          nit={cliente.nit}
          desc_empresa={cliente.descripcion_empresa}
          id={cliente.persona_id}
          reload={reload}
        />
      ))}
    </View>
  );
};

export default Proveedores

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10
  },
  container_title: {
    height: '6%',
    width: '106%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 5,
    marginBottom: '3%',

    backgroundColor: '#0174BE',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    // borderWidth: 1,
  },
  title_page: {
    fontSize: 21,
    color: 'white',
    fontWeight: '600'
  },
})