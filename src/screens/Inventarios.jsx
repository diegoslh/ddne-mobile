import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { getData } from '../helpers/getData';

// API ⚙️
const ENDPOINT = 'http://localhost:5000/inv/insumos';

const Inventarios = () => {

  //Hooks 🔗
  const [registros, setRegistros] = useState([]);

  //🔸 Solicitud de Datos a API
  useEffect(() => {
    getData(ENDPOINT, setRegistros);
  }, []);

  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.containerInventarios}>
      <Text style={{fontSize: 44}}>Inventarios</Text>
    </View>

    <ScrollView style={styles.scrollView} >
      {
        registros && registros.length > 0 ? 
          registros.map( r => (
            <Text
              key={r.id_inventario_insumos}
            >{r.id_inventario_insumos}</Text>

          ))
        : <Text>No hay registros disponibles</Text>
      }
      {/* <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Text> */}
    </ScrollView>
   </SafeAreaView> 
  )
}

export default Inventarios

const styles = StyleSheet.create({
  containerInventarios: {
    flex: 1,
    padding: 7,
    // height: '30%'
  },
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    borderWidth: 1
  },
  scrollView: {
    backgroundColor: '#ccc',
    paddingHorizontal: 5,
  },
  text: {
    color: '#fefefe',
    fontSize: 42,
  },
})
