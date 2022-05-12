import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from 'react'


//simularemos que nos llega un mensaje de error en el siguiente formato
//error.response.data.msg1 o error.response.data.msg2, o cualquiera que venga

export default function App() {

  //crearé un estado para manejar los distintos mensajes de error que pueda tener en este caso es msg1 y msg2
  const [errors, setError] = React.useState({
    msg1: '',
    msg2: '',
  })

  //utilizo un useEffect solo para llamar a la función de prueba
  React.useEffect(() => {
    probar();
  },[])


  const probar = () => {
    //en este caso simulo un objeto de error, para que el path a seguir sea en este caso error.response.data.msg1
    const error = {
      response: {
        data: {
          msg1: 'esto es un mensaje de error xd',
          msg2: 'esto es otro mensaje de error'
        }
      }
    }

    //creamos una variable en la que iremos haciendo los cambios
    let newErrors = errors
    //cuando realizamos un for in dentro de un objeto, lo que obtenemos en cada iteración es el nombre de la propiedad
    for(let property in error.response.data){
      //en este caso property, sería msg1, pero si vienera msg2, también lo reconociera
      console.log(property);
      //sustituimos en nuestra variable de errores, la propiedad que coincide con la que nos manda el error, y le asignamos su valor
      newErrors = {
        ...newErrors,
        [property]: error.response.data[property]
      }
    }

    //una vez recorremos todo el for y nuestra variable tiene su forma final, la guardamos en el estado para refrescar la pantalla
    setError(newErrors)

  }

  return (
    <View style={styles.container}>
      <Text>Hola mundo ya estoy lista para trabajar con expo :D</Text>
      <Text>Error en msg1: {errors.msg1}</Text>
      <Text>Error en msg2: {errors.msg2}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ee2",
    alignItems: "center",
    justifyContent: "center",
  },
});
