
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  // ToastAndroid,  
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { getData } from '../helpers/getData';
import axios from 'axios';
import useHardwareBackHandler from '../hooks/useHardwareBackHandler';
import CardRegistroExpandible from './CardRegistroExpandible';
import Loading from './Loading';

// API ⚙️
const ENDPOINT = 'http://192.168.0.29:5000/inv/insumos';

const InvInsumos = ({Opcion}) => {

  // Hooks 🔗
  const [isLoading, setIsLoading] = useState(true);
  const [registros, setRegistros] = useState([]);
  useHardwareBackHandler({ Opcion })

  //   {
  //     "id_inventario_insumos": 110,
  //     "fk_n_transaccion": 11,
  //     "fk_tipo_insumo": "Rollo Carton",
  //     "consecutivo_insumo": "N/A",
  //     "peso_insumo": "40.00",
  //     "unidades": 10,
  //     "fk_estado": "Recibido",
  //     "fecha_planificada": "2023-06-25T05:00:00.000Z",
  //     "fecha_recepcion": "2023-07-01T05:00:00.000Z",
  //     "fecha_registro": "2023-06-01T05:00:00.000Z",
  //     "fk_proveedor": "45965784",
  //     "fk_ti_proveedor": "CC",
  //     "fk_usuario": 2,
  //     "estado_registro": 1,
  //     "alias": "J.operaciones",
  //     "nombre_empresa": "Propandina S.A.S"
  //   },
  //   {
  //     "id_inventario_insumos": 111,
  //     "fk_n_transaccion": 11,
  //     "fk_tipo_insumo": "Parafina",
  //     "consecutivo_insumo": "N/A",
  //     "peso_insumo": "40.00",
  //     "unidades": 10,
  //     "fk_estado": "Recibido",
  //     "fecha_planificada": "2023-06-25T05:00:00.000Z",
  //     "fecha_recepcion": "2023-07-01T05:00:00.000Z",
  //     "fecha_registro": "2023-06-01T05:00:00.000Z",
  //     "fk_proveedor": "45965784",
  //     "fk_ti_proveedor": "CC",
  //     "fk_usuario": 2,
  //     "estado_registro": 1,
  //     "alias": "J.operaciones",
  //     "nombre_empresa": "Propandina S.A.S"
  //   },
  //   {
  //     "id_inventario_insumos": 112,
  //     "fk_n_transaccion": 11,
  //     "fk_tipo_insumo": "Rollo Carton",
  //     "consecutivo_insumo": "N/A",
  //     "peso_insumo": "40.00",
  //     "unidades": 10,
  //     "fk_estado": "Recibido",
  //     "fecha_planificada": "2023-06-25T05:00:00.000Z",
  //     "fecha_recepcion": "2023-07-01T05:00:00.000Z",
  //     "fecha_registro": "2023-06-01T05:00:00.000Z",
  //     "fk_proveedor": "45965784",
  //     "fk_ti_proveedor": "CC",
  //     "fk_usuario": 2,
  //     "estado_registro": 1,
  //     "alias": "J.operaciones",
  //     "nombre_empresa": "Propandina S.A.S"
  //   },
  // ]);

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
        setIsLoading(false);

      } catch (error) {
        setIsLoading(false);
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
    <>
      {isLoading
        ? <Loading />
        : (
          <SafeAreaView style={styles.container}>

            <View style={styles.container_title}>
              <Text style={styles.title_page}>Registros Insumos</Text>
            </View>

            <ScrollView style={styles.scrollView} >
              {
                registros && registros.length > 0 ?
                  registros.map(r => (
                    <CardRegistroExpandible
                      title={`${r.id_inventario_insumos} - ${r.fk_tipo_insumo}`}
                      id={r.id_inventario_insumos}
                    >
                      <Text
                        style={styles.info_label}
                        key={r.id_inventario_insumos + 'info_label'}
                      >
                        Estado: {'\n'}
                        {r.fk_estado === 'En Espera'
                          ? ('F. Llegada: ')
                          : ('F. Recepción: ')
                        } {'\n'}
                        Unidades: {'\n'}
                        Peso: {'\n'}
                        Proveedor: 
                      </Text>

                      <Text
                        style={styles.info_data}
                        key={r.id_inventario_insumos + 'info_data'}
                      >
                        {r.fk_estado + '\n'}
                        {r.fk_estado === 'En Espera'
                          ? r.fecha_planificada && r.fecha_planificada.split('T')[0]
                          : (r.fecha_recepcion
                            ? r.fecha_recepcion.split('T')[0]
                            : 'No Aplica Fecha'
                          )
                        } {'\n'}
                        {r.unidades + '\n'}
                        {r.peso_insumo + ' kg' + '\n'}
                        {r.nombre_empresa} 
                      </Text>
                    </CardRegistroExpandible>
                  )) : <Text style={styles.mensaje_vacio}> No hay registros disponibles ✖️</Text>
              }
            </ScrollView>
            
          </SafeAreaView>
        )
      }
    </>
  )
}

export default InvInsumos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // paddingTop: StatusBar.currentHeight,
    // borderWidth: 1
  },
  container_title: {
    height: '6%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 5,
    marginBottom: '3%',

    backgroundColor: '#0174BE',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    // borderWidth: 1,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  title_page: {
    fontSize: 21,
    color: 'white',
    fontWeight: '600'
  },
  text: {
    color: '#fefefe',
    fontSize: 42,
  },

  info_label: {
    fontSize: 15,
    color: '#435585',
    fontWeight: '500',
    lineHeight: 28,
    marginBottom: 7
  },
  info_data: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 28,
    marginBottom: 7
  },
  mensaje_vacio: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: '5%'
  }
});