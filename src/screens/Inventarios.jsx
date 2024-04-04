import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import Pendiente from './Pendiente';

function Inventarios() {

    const [opcion, setOpcion] = useState(null);

    useFocusEffect(
        React.useCallback(() => {
            setOpcion(null);
        }, [])
    );

    return (
        <View style={styles.contenedor}>
            {
                opcion === 'Inventario Insumos' ? (
                    <Pendiente Opcion={setOpcion}/>
                ) : opcion === 'Invetario Produccion' ? (
                    <Pendiente Opcion={setOpcion}/>
                ) : opcion === 'Segimiento de Lote' ? (
                    <Pendiente Opcion={setOpcion}/>
                ) : (
                    <View style={styles.opciones}>
                        <View style={styles.tarjeta}>
                            <TouchableOpacity 
                                style={styles.boton}
                                onPress={() => setOpcion('Inventario Insumos')}
                            >
                                <Text style={styles.tittle}>Inventario Insumos</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.tarjeta}>
                            <TouchableOpacity 
                                style={styles.boton}
                                onPress={() => setOpcion('Invetario Produccion')}
                            >
                                <Text style={styles.tittle}>Invetario Produccion</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.tarjeta}>
                            <TouchableOpacity 
                                style={styles.boton}
                                onPress={() => setOpcion('Segimiento de Lote')}
                            >
                                <Text style={styles.tittle}>Segimiento de Lote</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </View>
        
    )
}

export default Inventarios;

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
    },
    opciones: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    tarjeta: {
        width: '85%'
    },
    boton: {
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: '#2ca3d3',
        borderWidth: 2,
    },
    tittle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#2ca3d3'
    }
})

// import { 
//   StyleSheet, 
//   Text, 
//   View,
//   SafeAreaView,
//   ScrollView,
//   StatusBar
// } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { getData } from '../helpers/getData';

// // API ⚙️
// const ENDPOINT = 'http://localhost:5000/inv/insumos';

// const Inventarios = () => {

//   //Hooks 🔗
//   const [registros, setRegistros] = useState([]);

//   //🔸 Solicitud de Datos a API
//   useEffect(() => {
//     getData(ENDPOINT, setRegistros);
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>

//     <View style={styles.containerInventarios}>
//       <Text style={{fontSize: 44}}>Inventarios</Text>
//     </View>

//     <ScrollView style={styles.scrollView} >
//       {
//         registros && registros.length > 0 ? 
//           registros.map( r => (
//             <Text
//               key={r.id_inventario_insumos}
//             >{r.id_inventario_insumos}</Text>

//           ))
//         : <Text>No hay registros disponibles</Text>
//       }
//       {/* <Text style={styles.text}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//         aliquip ex ea commodo consequat. Duis aute irure dolor in
//         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//         culpa qui officia deserunt mollit anim id est laborum.
//       </Text> */}
//     </ScrollView>
//    </SafeAreaView> 
//   )
// }

// export default Inventarios

// const styles = StyleSheet.create({
//   containerInventarios: {
//     flex: 1,
//     padding: 7,
//     // height: '30%'
//   },
//   container: {
//     flex: 1,
//     // paddingTop: StatusBar.currentHeight,
//     borderWidth: 1
//   },
//   scrollView: {
//     backgroundColor: '#ccc',
//     paddingHorizontal: 5,
//   },
//   text: {
//     color: '#fefefe',
//     fontSize: 42,
//   },
// })
