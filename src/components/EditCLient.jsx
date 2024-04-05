import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  // ToastAndroid,
  TextInput,
} from "react-native";
import { Feather } from '@expo/vector-icons';
import { axios } from 'axios';

const transparent = 'rgba(0,0,0,0.5)';

const EditClient = ({ nombres, apellidos, telefono, email, empresa, id }) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  const datos_iniciales = {
    id: id,
    nombres: nombres,
    apellidos: apellidos,
    telefono: telefono,
    // direccion: direccion,
    email: email,
    // nit: nit, 
    empresa: empresa,
    // desc_empresa: desc_empresa
  }

  const [data, setData] = useState(datos_iniciales);

  const dataInto = (key, value) => {
    setData({
      ...data,
      [key]: value
    });
  };

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

            {/* // Formulario -------------------------------------------------- */}
            <View style={styles.container}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>N° Identificacion</Text>
                <TextInput
                  style={styles.input}
                  value={data.id}
                  onChangeText={(value) => dataInto('id', value)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Nombres</Text>
                <TextInput
                  style={styles.input}
                  value={data.nombres}
                  onChangeText={(value) => dataInto('nombres', value)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Apellidos</Text>
                <TextInput
                  style={styles.input}
                  value={data.apellidos}
                  onChangeText={(value) => dataInto('apellidos', value)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Telefono</Text>
                <TextInput
                  style={styles.input}
                  value={data.telefono}
                  onChangeText={(value) => dataInto('telefono', value)}
                />
              </View>              

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  value={data.email}
                  onChangeText={(value) => dataInto('email', value)}
                />
              </View>

              {/* <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Direccion</Text>
                <TextInput
                  style={styles.input}
                  value={data.direccion}
                  onChangeText={(value) => dataInto('direccion', value)}
                />
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
              </View> */}

            </View>

            {/* Modal Footer ---------------------------------------------------- */}
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
                  Cancelar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.eliminar}>
                <Text
                  style={{
                    color: "#F4EEE0",
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
    height: 460
  },
  cerrar: {
    borderColor: 'blue',
    backgroundColor: '#D21312',
    fontSize: 10,
    borderRadius: 5,
    padding: 2,
    paddingHorizontal: 9,
    paddingVertical: 5
  },
  eliminar: {
    // borderColor: 'red',
    backgroundColor: '#2F58CD',
    borderRadius: 5,
    padding: 2,
    paddingHorizontal: 9,
    paddingVertical: 5
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
    width: 300,
    height: 28,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default EditClient;
