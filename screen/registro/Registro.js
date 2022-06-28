import { ImageBackground, Text, View, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { Button, Colors, ProgressBar } from 'react-native-paper';
import { TextInput, List, IconButton } from 'react-native-paper';
import { useState } from 'react';
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { styles_basepantallas } from '../../styles/EstilosP';
import { styles_base } from '../../styles/estilosGeneral';
import * as valores from '../../styles/valoresBase'
import { listaIndustria } from './listaIndustria';
import { listaEstados } from './listaEstados';
import { registro } from './registro_api';



export default function Registro({ route, navigation, ...props }) {
 
  console.log(route)
  let correo = route.params.datos.correo;
  let pass = route.params.datos.password;
  const [paso, setPaso] = useState(1);
  const [nombre, setNombre] = useState("Alfonso");
  const [apellido, setApellido] = useState("Acevedo")
  const [company, setCompany] = useState("dadoroom")
  const [industria, setIndustria] = useState("");
  const [Ubicacion, setUbicacion] = useState("");

  const inputNombre = (text) => {
    setNombre(text);
  }

  const BarraProgreso = () => {
    let procentaje = 0;
    if (paso == 1) {
      procentaje = .25;
    } else
      if (paso == 2) {
        procentaje = .50;
      } else
        if (paso == 3) {
          procentaje = .75;
        } else
          if (paso == 4) {
            procentaje = 1;
          }
    return <ProgressBar
      progress={procentaje}
      color={valores.yellow}
      style={{
        backgroundColor: '#ECECEC', borderRadius: 10,
        margin: "5%"
      }}>

    </ProgressBar>
  }
  const back = () => {
    if (paso == 1) {
      navigation.navigate("Getstarted")
    } else
      if (paso == 2) {
        setPaso(1)
      } else
        if (paso == 3) {
          setPaso(2)

        } else
          if (paso == 4) {
            setPaso(3)

          }

  }

  const siguiente = () => {
    console.log("que pedo")
    if (paso == 1) {
      setPaso(2)
    } else
      if (paso == 2) {
        setPaso(3)
      } else
        if (paso == 3) {
          setPaso(4)

        } else
          if (paso == 4) {
            let datos = {
              "nombre": nombre,
              "apellido": apellido,
              "compania": company,
              "industria": industria,
              "Ubicacion": Ubicacion,
              "correo": correo,
              "pass": pass
            }
            registro(datos)
          }
  }

  return (
    <>
      <Appbar.Header style={styles_base.menusSuperior}  >
        <Appbar.BackAction onPress={() => { back() }} color={valores.yellow} size={valores.backSize} />
      </Appbar.Header>

      <View key={"principal"} style={[styles_basepantallas.container, styles_base.margenLateralBase]} >

        {/***Información superior como titulos**/}
        <View style={[{ height: "10%" }]} key={"superior"}>
          <Text
            style={{
              color: '#000',
              width: "100%",
              fontWeight: 700,
              fontSize: 28,
              fontStyle: 'normal',
              fontWeight: 'bold'
            }}>
            {paso == 1 && (
              "Información basica de ti y tu negocio"
            )
            }
            {paso == 2 && (
              "¿En que industria trabajas?"
            )
            }
            {paso == 3 && (
              "¿En que estado te ubicas?"
            )
            }
            {paso == 4 && (
              "Revisa tus datos"
            )
            }
          </Text>
        </View>

        {/**informacion media***/}
        <View style={[{ height: "70%" }]} key={"medio"}>

          {paso == 1 && (
            <>
              <TextInput
                label="Nombre"
                underlineColor='transparent'
                value={nombre}
                onChangeText={(text) => setNombre(text)}
                style={[styles_base.inputRegistro]} />

              <TextInput
                label="Apellido"
                underlineColor='transparent'
                value={apellido}
                onChangeText={text => setApellido(text)}
                style={[styles_base.inputRegistro]} />
              <TextInput
                label="Compañia (Opcional)"
                underlineColor='transparent'
                value={company}
                onChangeText={text => setCompany(text)}
                style={[styles_base.inputRegistro]} />

            </>)
          }
          {paso == 2 && (
            <>
              <TextInput
                label="seleccion"
                underlineColor='transparent'
                value={industria}
                style={{
                  marginTop: 2,
                  marginBottom: 2,
                  backgroundColor: '#fff',
                  borderBottomColor: '#ECECEC',
                  borderRadius: 50,
                  borderWidth: 3,
                  borderColor: "#ECECEC",
                  borderRadius: 8,
                  shadowColor: "black"
                }}
                disabled
              />

              <SafeAreaView style={{ height: "90%" }} >
                <FlatList
                  data={listaIndustria}
                  renderItem={({ item }) => <Text onPress={() => { setIndustria(item.nombre) }} style={styles_base.itemsLista} >{item.nombre}</Text>}
                  keyExtractor={item => item.id}
                />
              </SafeAreaView>
            </>
          )
          }
          {paso == 3 && (
            <>

              <TextInput
                label="seleccion"
                underlineColor='transparent'
                value={Ubicacion}
                style={{
                  marginTop: 2,
                  marginBottom: 2,
                  height: 50,
                  backgroundColor: '#fff',
                  borderBottomColor: '#ECECEC',
                  borderRadius: 50,
                  borderWidth: 3,
                  borderColor: "#ECECEC",
                  borderRadius: 8,
                  shadowColor: "black",
                }} />


              <SafeAreaView style={{ height: "90%" }}>
                <FlatList
                  data={listaEstados}
                  renderItem={({ item }) => <Text onPress={() => { setUbicacion(item.nombre) }} style={styles_base.itemsLista} >{item.nombre}</Text>}
                  keyExtractor={item => item.id}
                />
              </SafeAreaView>


            </>
          )
          }
          {paso == 4 && (
            <>
              <TextInput
                disabled
                label="Correo"
                underlineColor='transparent'
                value={correo}
                style={[styles_base.inputRegistro]} />
              <TextInput
                disabled
                label="Nombre"
                underlineColor='transparent'
                value={nombre}
                style={[styles_base.inputRegistro]} />

              <TextInput
                disabled
                label="Apellido"
                underlineColor='transparent'
                value={apellido}
                style={[styles_base.inputRegistro]} />
              <TextInput
                disabled
                label="Compañia (Opcional)"
                underlineColor='transparent'
                value={company}
                style={[styles_base.inputRegistro]} />
              <TextInput
                disabled
                label="Industria"
                underlineColor='transparent'
                value={industria}
                style={[styles_base.inputRegistro]} />
              <TextInput
                disabled
                label="Estado"
                underlineColor='transparent'
                value={Ubicacion}
                style={[styles_base.inputRegistro]} />

            </>)
          }
        </View>

        {/**inferior***/}
        <View style={{
          width: "100%",
          paddingTop: "5%",
          paddingBottom: "5%",
          color: '#ECECEC'
        }}
          key={"inferior"}
        >
          <BarraProgreso />
          <Button
            mode="contained"
            onPress={() => siguiente()}
            style={[styles_basepantallas.boton_siguiente3, { margin: "3%" }]}>

            <Text
              style={styles_basepantallas.btn_texnegro}>
              {paso == 4 && ("Confirmar")}
              {paso != 4 && ("Siguiente")}
            </Text>

          </Button>
        </View>
      </View>


    </>


  );

}