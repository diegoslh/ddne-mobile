import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import Pendiente from './Pendiente';
import Clientes from './Clientes';
import { LinearGradient } from 'expo-linear-gradient';
import proveedorImg from '../assets/img/proveedor.png';
import clienteImg from '../assets/img/cliente.png';

function Personas() {

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
                    <Pendiente Opcion={setOpcion} />
                ) : opcion === 'Clientes' ? (
                    <Clientes Opcion={setOpcion} />
                ) : opcion === 'Usuarios' ? (
                    <Pendiente Opcion={setOpcion} />
                ) : (
                    <View style={styles.opciones}>
                        <View style={styles.tarjeta}>
                            <TouchableOpacity
                                style={styles.boton}
                                onPress={() => setOpcion('Proveedores')}
                            >
                                <LinearGradient
                                    colors={['rgb(38, 143, 206)', 'rgba(126, 197, 241, 0.7)', 'rgba(26, 164, 247, 0.08)']}
                                    start={{ x: 0, y: 0 }}
                                    // end={{ x: 1, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={StyleSheet.absoluteFill}
                                />
                                <View style={styles.view_image}>
                                    <Image source={proveedorImg} style={{ width: 85, height: 85 }} />
                                </View>
                                <Text style={styles.tittle}>Proveedores</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.tarjeta}>
                            <TouchableOpacity
                                style={styles.boton}
                                onPress={() => setOpcion('Clientes')}
                            >
                                <LinearGradient
                                    colors={['rgb(38, 143, 206)', 'rgba(126, 197, 241, 0.7)', 'rgba(26, 164, 247, 0.08)']}
                                    start={{ x: 0, y: 0 }}
                                    // end={{ x: 1, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={StyleSheet.absoluteFill}
                                />
                                <View style={styles.view_image}>
                                    <Image source={clienteImg} style={{ width: 82, height: 82 }} />
                                </View>
                                <Text style={styles.tittle}>Clientes</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <View style={styles.tarjeta}>
                            <TouchableOpacity
                                style={styles.boton}
                                onPress={() => setOpcion('Usuarios')}
                            >
                                <LinearGradient
                                    colors={['rgb(38, 143, 206)', 'rgba(126, 197, 241, 0.7)', 'rgba(26, 164, 247, 0.08)']}
                                    start={{ x: 0, y: 0 }}
                                    // end={{ x: 1, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={StyleSheet.absoluteFill}
                                />
                                <Text style={styles.tittle}>Usuarios</Text>
                            </TouchableOpacity>
                        </View> */}
                        <Text style={styles.logo}>DDNE Inventory</Text>
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
        gap: 30
    },
    tarjeta: {
        width: '85%'
    },
    boton: {
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        overflow: 'hidden',
        borderColor: 'rgba(126, 197, 241, 0.7)',
        borderWidth: 1,
        // gap: 10,
        flexDirection: 'row'
    },
    view_image: {
        width: '40%',
        // borderWidth: 1,
        alignItems: 'center'
    },
    tittle: {
        width: '50%',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'rgb(0, 10, 67)',
        // borderWidth: 1
    },
    logo: {
        position: 'absolute',
        bottom: 13,
        fontSize: 18, 
        fontWeight: '500',
        color: '#246391'
    }
})