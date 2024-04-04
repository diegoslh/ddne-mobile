
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  ToastAndroid
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { getData } from '../helpers/getData';
import axios from 'axios';

// API ⚙️
const ENDPOINT = 'http://10.0.2.2:5000/inv/insumos';

const InvInsumos = () => {

  // Hooks 🔗
  const [registros, setRegistros] = useState([]);

  //🔸 Solicitud de Datos a API
  useEffect(() => {
    // getData(ENDPOINT, setRegistros);

    const obtenerDatos = async () => {
      try {
        const response = await axios.get(ENDPOINT);
        // console.log(response.data.success, ' +++');

        response.data.success
          ? setRegistros(response.data.data)
          : setRegistros([]);
        ;
      } catch (error) {
        setRegistros(false);
        console.log(error);
        ToastAndroid.show('⛔ Error en Solicitud de Datos a API', ToastAndroid.LONG);
        console.log(registros)
      }
    }

    obtenerDatos();
  }, []);
  // console.log('>>> ', registros)

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.containerInventarios}>
        <Text style={{ fontSize: 21 }}>Registros Insumos</Text>
      </View>

      <ScrollView style={styles.scrollView} >
        {
          registros && registros.length > 0 ?
            registros.map(r => (<View style={styles.card_registro}>
              <Text key={r.id_inventario_insumos} style={styles.card_title}>
                {r.id_inventario_insumos} - {r.fk_tipo_insumo}
              </Text>

              <View style={styles.card_data}>
                <Text 
                  style={styles.info_label}
                  key={r.id_inventario_insumos + 'info_label'}
                >
                  Estado: {'\n'}

                  {
                    r.fk_estado === 'En Espera' ? (
                      'F. Llegada: '
                    ) : (
                      'F. Recepción: '
                    )
                  } {'\n'}

                  Unidades: {'\n'}
                  Peso: 
                </Text>

                <Text 
                  style={styles.info_data}
                  key={r.id_inventario_insumos + 'info_data'}
                >
                  {r.fk_estado} {'\n'}
                  {
                    r.fk_estado === 'En Espera' ? (
                      r.fecha_planificada && r.fecha_planificada.split('T')[0]
                    ) : (
                      r.fecha_recepcion ? r.fecha_recepcion.split('T')[0] : 'No Aplica Fecha'
                    )
                  } {'\n'}
                  {r.unidades} {'\n'}
                  {r.peso_insumo}
                </Text>
              </View>

            </View>))
            : <Text>No hay registros disponibles</Text>
        }
      </ScrollView>

    </SafeAreaView>
  )
}

export default InvInsumos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: StatusBar.currentHeight,
    // borderWidth: 1
  },
  containerInventarios: {
    height: '6%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'lightblue',
    // borderWidth: 1,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 5,
  },
  text: {
    color: '#fefefe',
    fontSize: 42,
  },
  card_registro: {
    // borderBottomWidth: 1,
    // borderBottomColor: '#000',
    paddingTop: 10,
  },
  card_title:{
    backgroundColor: '#cccccc54',
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#048cbad8',
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 5,
    paddingHorizontal: 15,
    paddingLeft: 20,
  },
  card_data: {
    flex: 1,
    flexDirection: 'row',
    gap: 15,   
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  info_label: {
    fontSize: 15,
    color: 'gray',
    fontWeight: '500',
    lineHeight: 28,
  },
  info_data: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 28,
  }
})
