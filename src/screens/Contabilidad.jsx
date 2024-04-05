import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';

import Transacciones from '../components/Transacciones';
import Pendiente from './Pendiente';

function Contabilidad() {

    const [opcion, setOpcion] = useState(null);

    useFocusEffect(
        React.useCallback(() => {
            setOpcion(null);
        }, [])
    );

    return (
        <View style={styles.contenedor}>
            {
                opcion === 'Informe' ? (
                    <Pendiente Opcion={setOpcion}/>
                ) : opcion === 'Transacciones' ? (
                    <Transacciones Opcion={setOpcion}/>
                ) : opcion === 'Productos' ? (
                    <Pendiente Opcion={setOpcion}/>
                ) : (
                    <View style={styles.opciones}>
                        {/* <View style={styles.tarjeta}>
                            <TouchableOpacity 
                                style={styles.boton}
                                onPress={() => setOpcion('Informe')}
                            >
                                <Text style={styles.tittle}>Informe Inventario</Text>
                            </TouchableOpacity>
                        </View> */}
                        <View style={styles.tarjeta}>
                            <TouchableOpacity 
                                style={styles.boton}
                                onPress={() => setOpcion('Transacciones')}
                            >
                                <Text style={styles.tittle}>Transacciones</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.tarjeta}>
                            <TouchableOpacity 
                                style={styles.boton}
                                onPress={() => setOpcion('Productos')}
                            >
                                <Text style={styles.tittle}>Productos</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.logo}>DDNE Inventory</Text>
                    </View>
                )
            }
        </View>
        
    )
}

export default Contabilidad;

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
    },
    logo: {
        position: 'absolute',
        bottom: 13,
        fontSize: 18, 
        fontWeight: '500',
        color: '#246391'
    }
})