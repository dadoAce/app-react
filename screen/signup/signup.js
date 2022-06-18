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


            <View style={{ flex: 3, height: "100%", justifyContent: "flex-end" }}>


                <Text
                    style={{ color: '#000', marginBottom: 50, textAlign: "center", width: "100%", 
                    fontWeight:700, fontSize: 28, alignItems: "center" , fontStyle: 'normal',fontWeight: 'bold'}}>

                    Crea tu cuenta para comenzar


                </Text>


            </View>

            

            <View style={[styles_basepantallas.margenLateral, { flex: 7 }]}>


                <TextInput
                    label="correo electronico"
                    underlineColor='transparent'
                    value={text}
                    onChangeText={text => setText(text)}
                    style={{ marginTop: 5, height: 50, marginBottom: 15, backgroundColor: "E5E5E5", margin: 5,
                    borderWidth: 3, borderColor: "#ECECEC",borderRadius: 8, elevation: 0,shadowOpacity:0, shadowRadius:0, shadowOffset:0,
                    shadowColor: "black" , textShadowRadius: 1 }}
                   
                    
                />
                <TextInput
                    label="Contraseña"
                    underlineColor='transparent'
                    value={text2}
                    onChangeText={text2 => setText2(text2)}
                    style={{ marginTop: 5, height: 50, marginBottom: 15,backgroundColor: "E5E5E5", margin: 5,
                    borderWidth: 3, borderColor: "#ECECEC",borderRadius: 8, elevation: 0,shadowOpacity:0, shadowRadius:0, shadowOffset:0,
                    shadowColor: "black" , textShadowRadius: 1  }}
                    secureTextEntry
                    
                    
                />
                <TextInput
                    label="Confirmar Contraseña"
                    underlineColor='transparent'
                    value={text3}
                    onChangeText={text3 => setText3(text3)}
                    style={{ marginTop: 5, height: 50, marginBottom: 25,backgroundColor: "E5E5E5", margin: 5, 
                    borderWidth: 3, borderColor: "#ECECEC",borderRadius: 8, elevation: 0,shadowOpacity:0, shadowRadius:0, shadowOffset:0,
                    shadowColor: "black" , textShadowRadius: 1  }}
                    secureTextEntry
                   

                />

                <Button
                    touchableOpacity
                    mode="contained"
                    onPress={() => navigation.navigate("Dashboard")}
                    style={styles_basepantallas.boton_continuar} >
                    <Text style={{fontFamily: 'Monserrat', fontStyle: 'normal', width:"105", height:"24" }}>  </Text>
                    <Text
                        style={styles_basepantallas.btn_texnegro}>
                        Continuar
                    </Text>

                </Button>
                <Text
                    style={{ color: '#565656', marginBottom: 40, textAlign: "right", width: "370", height: "68",
                    textAlign:"center", justifyContent: "center"}}
                    onPress={() => Linking.openURL('http://google.com')}>
                   <Text>
                   Al hacer click en "Continuar" aceptas nuestros
                   </Text>
                   <Text style= {{textDecorationLine: 'underline'}}>
                     Términos y Condiciones asi como nuestra política de privacidad.
                     </Text>
                </Text>

                <View style={{ flex: 3, height: "100%", justifyContent: "center", paddingTop:"10%", paddingBottom:"5%"}}>

                    <Text
                        style={{ color: '#565656', marginBottom: 10, textAlign: "center"}}
                        onPress={() => Linking.openURL('http://google.com')}>
                            <Text style= {{width:"154", height:"20" }}>
                            ¿Aun no te has registrado?
                            </Text>
                            <Text style= {{textDecorationLine: 'underline', fontWeight: 'bold',width:"92", height:"20" }}>
                            Inicia Sesión
                            </Text>
                    </Text>
                </View>
              

            </View>
        </View>
    );
} 