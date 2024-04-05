import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
} from "react-native";
import { Feather } from '@expo/vector-icons';
import { axios } from 'axios';

const transparent = 'rgba(0,0,0,0.5)';

const EditClient = ({nombre, id}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
      <>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Feather name="edit-3" size={24} color="black" />
        </TouchableOpacity>

        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={styles.centeredView}
            onPress={() => setModalVisible(false)}
          >
            <View style={styles.modalView}>
              <View style={styles.modaltop}>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={styles.cerrar}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Cerrar
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.eliminar}>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                    }}
                    onPress={() => {
                      setModalVisible(false);
                    }}
                  >
                    Editar
                  </Text>
                </TouchableOpacity>
              </View>
              // Formulario --------------------------------------------------
              {/* <View style={styles.container}>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>N° Identificacion</Text>
                  <TextInput style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Nombres</Text>
                  <TextInput style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Apellidos</Text>
                  <TextInput style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Telefono</Text>
                  <TextInput style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Direccion</Text>
                  <TextInput style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Email</Text>
                  <TextInput style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>NIT</Text>
                  <TextInput style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Empresa</Text>
                  <TextInput style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Descripcion</Text>
                  <TextInput style={styles.input} />
                </View>
              </View> */}
            </View>
          </View>
        </Modal>
      </>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: transparent,
    },
    modalView: {
        backgroundColor: 'white',
        padding: 15,
        width: '90%',
        borderRadius: 10,
    },
    cerrar: {
      borderColor: 'blue',
      backgroundColor: 'blue',
      fontSize: 10,
      borderRadius: 5,
      padding: 2,
      paddingLeft: 6,
      paddingRight: 6,
    },
    eliminar: {
      borderColor: 'red',
      backgroundColor: 'red',
      borderRadius: 5,
      padding: 2,
      paddingLeft: 6,
      paddingRight: 6,
    },
    modaltop: {
      // position: 'absolute',
      top: 1,
      alignItems: 'center',
      flexDirection: 'row',
      gap: 10,
      paddingLeft: 15,
      paddingTop: 10,
      marginBottom: 10
    },
    input: {
      fontSize: 15,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderColor: '#6494ec',
      paddingVertical: 10,
      paddingHorizontal: 8
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      padding: 20,
    },
    inputContainer: {
      marginBottom: 10,
    },
    inputLabel: {
      marginBottom: 5,
      fontSize: 16,
    },
    input: {
      height: 40,
      borderColor: '#CCCCCC',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
    },
});

export default EditClient;
