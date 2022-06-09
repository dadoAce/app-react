import { ImageBackground, Text, View, Image, Linking, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput, Title, Headline } from 'react-native-paper';
import { useState } from 'react';
import { styles_base, colores } from '../../styles/estilosGeneral';
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { styles_basepantallas } from '../../styles/EstilosP';





export default function Signup({ navigation }) {
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    
    return (

        <View style={styles_basepantallas.container}>
            <Appbar.Header style={{ backgroundColor: '#fff', elevation:0}}>
                
                <Appbar.BackAction onPress={() => { }} color="#ffd700" size={45}/>
            
            </Appbar.Header>


            <View style={{ flex: 2, height: "100%", justifyContent: "flex-end" }}>


                <Text
                    style={{ color: '#000', marginBottom: 50, textAlign: "center", width: "100%", fontWeight:650, fontSize: 30, alignItems: "center" }}>

                    Crea tu cuenta para comenzar


                </Text>


            </View>

            <View style={[styles_basepantallas.margenLateral, { flex: 6 }]}>


                <TextInput
                    label="correo electronico"
                    value={text}
                    
                    onChangeText={text => setText(text)}
                    style={{ marginTop: 5, height: 50, marginBottom: 15, backgroundColor: "E5E5E5", margin: 5,
                    borderWidth: 3, borderColor: "#ECECEC",borderRadius: 8, elevation: 0,shadowOpacity:0, shadowRadius:0, shadowOffset:0,
                    shadowColor: "black" , textDecorationLine:0}}
                    
                />
                <TextInput
                    label="Contraseña"
                    value={text2}
                    onChangeText={text2 => setText2(text2)}
                    style={{ marginTop: 5, height: 50, marginBottom: 15 }}
                    secureTextEntry
                    
                    
                />
                <TextInput
                    label="Confirmar Contraseña"
                    value={text3}
                    onChangeText={text3 => setText3(text3)}
                    style={{ marginTop: 5, height: 50, marginBottom: 25 }}
                    secureTextEntry
                   

                />

                <Button
                    touchableOpacity
                    mode="contained"
                    onPress={() => navigation.navigate("Dashboard")}
                    style={styles_basepantallas.boton_continuar}


                >

                    <Text
                        style={styles_basepantallas.btn_texnegro}>
                        Continuar
                    </Text>

                </Button>
                <Text
                    style={{ color: '#000', marginBottom: 40, textAlign: "right", width: "100%" }}
                    onPress={() => Linking.openURL('http://google.com')}>
                    Al hacer click en "Continuar" aceptas nuestros Términos y Condiciones asi como nuestra política de privacidad.
                </Text>
                <View style={{ flex: 2, height: "100%", justifyContent: "flex-end" }}>

                    <Text
                        style={{ color: '#565656', marginBottom: 10, textAlign: "center" }}
                        onPress={() => Linking.openURL('http://google.com')}>
                        ¿Aun no te has registrado? Inicia seseión
                    </Text>

                </View>

            </View>
        </View>
    );
} 