import { StyleSheet, Text, View, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import CardPerson from '../components/CardPerson'
import Clientimage from '../assets/img/client.png'
import axios from 'axios'

const Clientes = () => {
  
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
      {clientes.map(cliente => (
        <CardPerson
          key={cliente.persona_id} 
          icon={Clientimage}
          nombre={`${cliente.nombre_1} ${cliente.nombre_2}`}
          apellido={cliente.apellido_1}
          telefono={cliente.telefono}
          correo={cliente.correo} 
          empresa={cliente.nombre_empresa}
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
        justifyContent: 'space-between', 
        paddingHorizontal: 10, 
        paddingVertical: 10, 
    }
})