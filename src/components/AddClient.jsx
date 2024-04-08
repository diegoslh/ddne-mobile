import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, ToastAndroid,  } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { IPv4 } from '../../config';
import { SelectList } from 'react-native-dropdown-select-list'
import  axios  from 'axios';


const transparent = 'rgba(0,0,0,0.5)';
const ENDPOINT = `http://${IPv4}:5000/createclient`;



const AddClient = ({reload}) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  const datos_iniciales = {
    persona_id: null,
    nombres: '',
    apellidos: '',
    telefono: '',
    direccion: '',
    email: '',
    nit: null, 
    empresa: '',
    desc_empresa: '', 
  }

const [selected, setSelected] = useState('');

const datatipodoc = (key, value) => {
  setSelected({
    ...selected,
    [key]: value
  });
};

  const tipodoc = [
    { key: 'CC', value: 'Cedula de Ciudadania' },
    { key: 'CE', value: 'Cedula de Extrangeria' },
    { key: 'Otro', value: 'Otro' }
  ];



  const [data, setData] = useState(datos_iniciales);

  const dataInto = (key, value) => {
    setData({
      ...data,
      [key]: value
    });
  };

  const handleSubmit= async () => {
    console.log('Entro al fomulario');

    try {

      // const postdata = {
      //   ...selected,
      //   ...data
      // };

      // const postdata = selected.concat(data);

      const response = await axios.post(`${ENDPOINT}`, postdata);
      console.log(response)

      if (response.data.success) {
        ToastAndroid.show('Se ha añadido el cliente correctamente', ToastAndroid.LONG);
        setModalVisible(false);
        reload();
      } else {
        ToastAndroid.show('No se ha podido añadir al cliente', ToastAndroid.LONG);
        setModalVisible(false);
      }
    } catch (error) {
      ToastAndroid('Ha ocurrido un error al enviar los datos', ToastAndroid.LONG);
    }
  };


  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          position: "absolute",
          right: 10,
          bottom: 10,
        }}
      >
        <AntDesign name="adduser" size={24} color="black" />
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
                  value={data.persona_id}
                  onChangeText={(value) => dataInto("persona_id", value)}
                />
              </View>

              <View style={styles.inputContainer}>
                <SelectList 
                  data={tipodoc}
                  setSelected={setSelected}
                  onChangeText={dataInto}
                  placeholder='Tipo de documento'
                />
              </View>


              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Nombres</Text>
                <TextInput
                  style={styles.input}
                  value={data.nombres}
                  onChangeText={(value) => dataInto("nombres", value)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Apellidos</Text>
                <TextInput
                  style={styles.input}
                  value={data.apellidos}
                  onChangeText={(value) => dataInto("apellidos", value)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Telefono</Text>
                <TextInput
                  style={styles.input}
                  value={data.telefono}
                  onChangeText={(value) => dataInto("telefono", value)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  value={data.email}
                  onChangeText={(value) => dataInto("email", value)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Direccion</Text>
                <TextInput
                  style={styles.input}
                  value={data.direccion}
                  onChangeText={(value) => dataInto("direccion", value)}
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
              </View>
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
                    handleSubmit();
                    setModalVisible(false);
                  }}
                >
                  Añadir
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
    height: 700,
    marginBottom: 15
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

export default AddClient

