import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import Pendiente from './Pendiente';
import Clientes from './Clientes';

function Personas() {

    useHardwareBackHandler({ Opcion })

    const [opcion, setOpcion] = useState(null);

    useFocusEffect(
        React.useCallback(() => {
            setOpcion(null);
        }, [])
    );

    return (
        <View style={styles.contenedor}>
            {
                opcion === 'Proveedores' ? (
                    <Pendiente Opcion={setOpcion}/>
                ) : opcion === 'Clientes' ? (
                    <Clientes Opcion={setOpcion}/>
                ) : opcion === 'Usuarios' ? (
                    <Pendiente Opcion={setOpcion}/>
                ) : (
                    <View style={styles.opciones}>
                        <View style={styles.tarjeta}>
                            <TouchableOpacity 
                                style={styles.boton}
                                onPress={() => setOpcion('Proveedores')}
                            >
                                <Text style={styles.tittle}>Proveedores</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.tarjeta}>
                            <TouchableOpacity 
                                style={styles.boton}
                                onPress={() => setOpcion('Clientes')}
                            >
                                <Text style={styles.tittle}>Clientes</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.tarjeta}>
                            <TouchableOpacity 
                                style={styles.boton}
                                onPress={() => setOpcion('Usuarios')}
                            >
                                <Text style={styles.tittle}>Usuarios</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </View>
        
    )
}

export default Personas;

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