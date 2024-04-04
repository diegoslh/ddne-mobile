import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import Pendiente from './Pendiente';
import InvInsumos from '../components/InvInsumos';
import InvProduccion from '../components/InvProduccion';

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
                    <InvInsumos Opcion={setOpcion}/>
                ) : opcion === 'Inventario Produccion' ? (
                    <InvProduccion Opcion={setOpcion}/>
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
                                onPress={() => setOpcion('Inventario Produccion')}
                            >
                                <Text style={styles.tittle}>Inventario Producción</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <View style={styles.tarjeta}>
                            <TouchableOpacity 
                                style={styles.boton}
                                onPress={() => setOpcion('Segimiento de Lote')}
                            >
                                <Text style={styles.tittle}>Segimiento de Lote</Text>
                            </TouchableOpacity>
                        </View> */}
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
