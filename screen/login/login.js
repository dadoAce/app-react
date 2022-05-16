
import { ImageBackground, Text, View, Image, Linking, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput, Title, Headline } from 'react-native-paper';
import { useState } from 'react';
import { styles_base, colores } from '../../styles/estilosGeneral';



export default function Login({ navigation }) {
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    return (

        <View style={styles_base.container}>
            <ImageBackground source={require("./../../Inicio.png")}
                resizeMode="stretch"
                style={[styles_base.portada_login, { flex: 2, height: "100%" }]}> {/* COMENTARIO: LOS NUMEROS EN FLEX SICNIFICAN EL ESPACIO QUE DEBEN DE TENER, POR EJEMPLO AQUI ES 2 DE 5 PARTES, EL OTRO 3 ESTA EN LA VIEW DE ABAJO  */}
                <View style={styles_base.portada_distribucion}>

                    <View style={styles_base.renglon_centrado}>

                        <Image
                            style={{ width: 70, height: 70, padding: 10 }}
                            source={require("./../../assets/logo_maistro.svg")}
                        />
                        <View style={{ paddingHorizontal: 10 }}>
                            <Headline style={styles_base.portada_Maistro}>Maistro</Headline>
                            <Text style={styles_base.portada_subtitulo}>La manera mas facil de administrar tu negocio</Text>
                        </View>
                    </View>
                    <Text style={styles_base.portada_titulo}>Iniciar sesión</Text>
                </View>
            </ImageBackground>

            <View style={[styles_base.margenLateral, { flex: 3 }]}>
                {/** AQUI ESTA EL FLEX 3, SE SUBAN LOS FLEX; 2 DEL PRIMERO, 3 DE ESTE Y YA SON 5, Y CADA VIEW TOMA EL ESPACIO SEGUN SU NÚMERO 
                 * USAR styles_base.margenLateral PARA COLOCAR LOS MARGENES( ESPACIOS LATERALES), ASI EVITARAS COLOCAR WIDTH A TODOS LOS COMPONENTES DE ADENTRO
                */}

                <TextInput
                    label="correo electronico"
                    value={text}
                    onChangeText={text => setText(text)}
                    style={{ marginTop: 5, height: 50 }}
                />
                <TextInput
                    label="Contraseña"
                    value={text2}
                    onChangeText={text2 => setText2(text2)}
                    style={{ marginTop: 5, height: 50, marginBottom: 10 }}
                    secureTextEntry
                    right={<TextInput.Icon name="eye" />
                    }
                />
                <Text
                    style={{ color: '#000', marginBottom: 40, textAlign: "right", width: "100%" }}
                    onPress={() => Linking.openURL('http://google.com')}>
                    ¿Olvidaste tu contraseña?
                </Text>
                <Button
                    touchableOpacity
                    mode="contained"
                    onPress={() => navigation.navigate("Dashboard")}
                    style={styles_base.boton_primario}>
                    <Text
                        style={styles_base.btn_txt_negro}>
                        Iniciar sesión
                    </Text>{/**COLOCAR EL TEXTO EN UNA ETIQUETA PARA CAMBIARLE EL COLOR */}

                </Button>

                <View style={{ flex: 2, height: "100%", justifyContent: "flex-end" }}>

                    <Text
                        style={{ color: '#565656', marginBottom: 10, textAlign: "center" }}
                        onPress={() => Linking.openURL('http://google.com')}>
                        ¿Aun no te has registrado?
                    </Text>
                    <Button
                        touchableOpacity
                        mode="contained" onPress={() => navigation.navigate("Dashboard")} color="yellow"
                        style={{
                            marginBottom: 10, backgroundColor: 'white',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: '#FFBE00' 
                        }}
                    >
                        <Text
                            style={{color:"#FFBE00"}}>
                            Registrarse
                        </Text>
                    </Button>
                </View>

            </View>
        </View>
    );
} 