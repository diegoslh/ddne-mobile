import { StyleSheet, Text, View, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import useHardwareBackHandler from '../hooks/useHardwareBackHandler'
import CardPerson from '../components/CardPerson'
import Clientimage from '../assets/img/client-azul.png'
import axios from 'axios'

const Clientes = ({ Opcion }) => {

  useHardwareBackHandler({ Opcion })

  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    axios.get('http://10.0.2.2:5000/clientes')
      .then(response => {
        setClientes(response.data.data);
      })
      .catch(error => {
        console.error('Error al traer la informacion:', error);
      });
  }, []);

  return (
    <View style={styles.contenedor}>
      <View style={styles.container_title}>
        <Text style={styles.title_page}>Clientes</Text>
      </View>

      {clientes.map(cliente => (
        <CardPerson
          key={cliente.persona_id}
          icon={Clientimage}
          nombre={`${cliente.nombre_1} ${cliente.nombre_2}`}
          apellido={cliente.apellido_1}
          telefono={cliente.telefono}
          correo={cliente.correo}
          empresa={cliente.nombre_empresa}
          id={cliente.persona_id}
        />
      ))}
    </View>
  );
};

export default Clientes

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