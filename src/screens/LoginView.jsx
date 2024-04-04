
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  // ToastAndroid 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import LogoDDNE from '../../assets/LogoDDNE.png'

//API ⚙️
const ENDPOINT = 'http://10.0.2.2:5000/login';

const LoginView = () => {

  const redirect = useNavigation();

  const [formData, setFormData] = useState({
    usuario: 'J.operaciones',
    password: 'contra123'
  });

  const dataInto = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    });
  };


  const handleSubmit = async () => {

    console.log('Formulario >> ', formData);
    try {
      const response = await axios.post(ENDPOINT, formData);

      if (response.data.success) {
        
        //🔹 Almacena la información de la sesión en AsyncStorage
        const user = JSON.stringify(response.data.user.session);
        await AsyncStorage.setItem('user_session', user);        

        redirect.navigate("HomeTab");
        return
      }

      console.log(` ${response.data.message}`);
      // ToastAndroid.show(` ${response.data.message}`, ToastAndroid.SHORT)

    } catch (error) {

      console.log(error.response.status)
      console.error('Error al enviar datos:', error);
      
      // error.response.status === 401 ? ToastAndroid.show(` ${error.response.data.message}`, ToastAndroid.SHORT)
      // : ToastAndroid.show('❌ Error al enviar datos:', ToastAndroid.SHORT);
      
    }
  };

  return (
    
    <View style={styles.container}>
      
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={LogoDDNE} style={styles.logo} />
      </View>

      {/* Login */}
      <View style={styles.loginContainer}>

        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Bienvenido a DDNE</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Usuario</Text>
          <TextInput
            style={styles.input}
            // placeholder="Usuario"
            value={formData.usuario}
            onChangeText={(text) => dataInto('usuario', text)}
          />

          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            // placeholder="Contraseña"
            secureTextEntry={true}
            value={formData.password}
            onChangeText={(text) => dataInto('password', text)}
          />

          {/* <TouchableOpacity style={styles.button} onPress={handleSubmit}> */}
          <TouchableOpacity style={styles.button} onPress={() => redirect.navigate("HomeTab")}>
            <Text style={styles.buttonText}>INGRESAR</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
};

export default LoginView;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // padding: 10
  },
  logoContainer: {
    width: '85%',
    height: 114,
    marginBottom: '18%',
    marginHorizontal: 'auto',
    // borderWidth: 1,  
  },
  logo: {
    width: '100%',
    height: '100%',
    // aspectRatio: 1,
    // borderWidth: 1,  
  },
  loginContainer: {
    width: '101%',
    height: '52%',
    paddingVertical: '13%',
    paddingHorizontal: 17,
    // borderRadius: 45,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#023693',
  },
  welcomeTextContainer: {
    alignItems: 'center',
    marginBottom: '10%',
  },
  welcomeText: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#048cba',
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 5
  },
  input: {
    fontSize: 15,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#6494ec',
    paddingVertical: 10,
    paddingHorizontal: 8
  },
  button: {
    backgroundColor: '#048cbad8',
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: '8%',
    width: '75%',
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
});