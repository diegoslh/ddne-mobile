import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native-web';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, Image } from 'react-native'
import userImg from "../../assets/user.png";


const Home = () => {

  const current_date = new Date().toISOString().split('T')[0];

  const [user, setUser] = useState(null);

  useEffect(() => {

    // const getSession = async () => {
    //   try {
    //     const session = await AsyncStorage.getItem('user_session');
    //     session != null && setUser(JSON.parse(session));
    //   } catch (e) {
    //     console.log( `Error al Obtener Datos de Session ${e}`);
    //   }
    // }

    // getSession();

    (async () => {
      try {
        const session = await AsyncStorage.getItem('user_session');
        session != null && setUser(JSON.parse(session));
      } catch (e) {
        console.log(`Error al Obtener Datos de Session ${e}`);
      }
    })();

  }, [])


  return (
    <View style={styles.container}>
      <StatusBar/>

      <View style={styles.userContainer}>
        <Image source={userImg} style={styles.userImg} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}> Información Usuario </Text>

        <View style={styles.infoView}>
          <Text style={styles.infoLabel}> Nombres:</Text>
          <Text style={styles.infoText}> {user?.names || 'No Disponible'} </Text>
        </View>

        <View style={styles.infoView}>
          <Text style={styles.infoLabel}> Usuario: </Text>
          <Text style={styles.infoText}> {user?.username || 'No Disponible'} </Text>
        </View>

        <View style={styles.infoView}>
          <Text style={styles.infoLabel}> Estado:</Text>
          <Text style={styles.infoText}> Activo </Text>
        </View>

        <View style={styles.infoView}>
          <Text style={styles.infoLabel}> Fecha:</Text>
          <Text style={styles.infoText}>{current_date || 'No Disponible'} </Text>
        </View>
      </View>


    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'flex-end'
    paddingTop: '8%',
     backgroundColor: 'white'
  },
  userContainer: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  userImg: {
    // aspectRatio: 1 / 1
    width: '65%',
    height: '90%',
    alignSelf: 'center',
  },
  infoContainer: {
    borderWidth: 2,
    borderColor: 'rgba(34, 136, 226, 0.66)',
    width: '101%',
    alignItems: 'center',
    paddingVertical: 20,
    marginVertical: 20,
    backgroundColor: 'rgba(101, 189, 215, 0.11)',
    // backgroundColor: 'rgb(13, 65, 111)'
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '3%',
    // color: 'white'
  },
  infoView: {
    flexDirection: 'row',
    // gap: 3,
    width: '86%',
    // borderWidth: 1    
  },
  infoLabel:{
    textAlign: 'justify',
    fontSize: 20,
    marginVertical: '1.2%',
    width: '43%',
    lineHeight: 28,
    paddingLeft: '12%',
    paddingRight: 10,
    // borderWidth: 1,
    // color: 'rgb(215, 213, 213)'
  },
  infoText: {
    fontSize: 20,
    marginVertical: '1.2%',
    textTransform: 'capitalize',
    width: '43%',
    lineHeight: 28,
    // borderWidth: 1,
    borderColor: 'red',
    // color: 'rgb(215, 213, 213)'
  }
})

