import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Pagina1 from "./steps/pantalla1";
import Pagina2 from "./steps/pantalla2";
import Pagina3 from "./steps/pantalla3";

const initialState = {
  name: "",
  age: "",
  address: "",
};

export const FormularioContext = React.createContext({
  formulario: initialState,
  setFormulario: () => {},
});

const paginas = [<Pagina1 />, <Pagina2 />, <Pagina3 />];

export default function Formulario() {
  const [posicion, setPosicion] = useState(0);
  const [formulario, setFormulario] = useState(initialState);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FormularioContext.Provider value={{ formulario, setFormulario }}>
        {paginas[posicion]}
      </FormularioContext.Provider>

      <View style={styles.footer}>
        <Button
          title="Atrás"
          disabled={posicion === 0}
          onPress={() => setPosicion(posicion - 1)}
        />
        {posicion === paginas.length - 1 ? (
          <Button onPress={() => console.log(formulario)} title="Guardar" />
        ) : (
          <Button onPress={() => setPosicion(posicion + 1)} title="Siguiente" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
});
