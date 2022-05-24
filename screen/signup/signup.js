import { ImageBackground, Text, View, Image, Linking, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput, Title, Headline } from 'react-native-paper';
import { useState } from 'react';
import { styles_base, colores } from '../../styles/estilosGeneral';



export default function Signup({ navigation }) {
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    return (

        <View style={styles_base.container}>

           
        <View style={{ flex: 2, height: "100%", justifyContent: "flex-end" }}>
         <View>             
             <Image
                            style={{ width: 35, height: 30, padding: 10, marginBottom: 85}}
                            source={require("./../../assets/vectorflecha.png")}
                        />
             <Text 
                   style={{ color: '#000', marginBottom: 50, textAlign: "center", width: "100%",fontSize:35, alignItems:"center"}}>
                      
                       Crea tu cuenta para comenzar 
                   

             </Text>

            
          </View>
          </View>  

            <View style={[styles_base.margenLateral, { flex: 3 }]}>
               

                <TextInput
                    label="correo electronico"
                    value={text}
                    onChangeText={text => setText(text)}
                    style={{ marginTop: 5, height: 50, marginBottom: 10 }}
                    
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
                <TextInput
                    label="Cinfirmar Contraseña"
                    value={text3}
                    onChangeText={text3 => setText3(text3)}
                    style={{ marginTop: 5, height: 50, marginBottom: 10 }}
                    secureTextEntry
                    right={<TextInput.Icon name="eye" />
                    }
                />
                <Text
                    style={{ color: '#000', marginBottom: 40, textAlign: "right", width: "100%" }}
                    onPress={() => Linking.openURL('http://google.com')}>
                    Al hacer click en "Continuar" aceptas nuestros Términos y Condiciones asi como nuestra política de privacidad.
                </Text>
                <Button
                    touchableOpacity
                    mode="contained"
                    onPress={() => navigation.navigate("Dashboard")}
                    style={styles_base.boton_primario}>
                    <Text
                        style={styles_base.btn_txt_negro}>
                        Continuar
                    </Text>

                </Button>

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